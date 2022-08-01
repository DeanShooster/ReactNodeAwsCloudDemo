require('../db/mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const userAuth = require('../middleware/authentication');
const {upload,uploadS3} = require('../middleware/upload');
const User = require('../db/model/user');

const router = express.Router();

//-------------------------------------- GET REQUESTS --------------------------------------------------------------- //

/**
 * Returns stats of a user.
 */
 router.get('/files/stats',userAuth,async(req,res)=>{
    try{
        const user = req.user;
        const stats = {
            total: user.data.length, memory: ((user.memory)/10000), server: 'Ireland',
            SecurityType: 'HTTPS', usage: user.usagePercentage, billing: (user.billing/10)
        };
        res.send( stats );
    }
    catch(e) { return next(e);}
});

/**
 * Returns all user stored data items.
 */
 router.get('/files',userAuth,async(req,res,next)=>{
    try{
        const user = req.user;
        const fileList = [];
        (user.data).forEach( (file)=> fileList.push( {fileName: file.name, key: process.env.AWS_Bucket_URL+file.key } ));
        res.send( {fileList} );
    }
    catch(e) { return next(e);}
});


//-------------------------------------- POST REQUESTS --------------------------------------------------------------- //

/**
 * Register router.
 */
 router.post('/register', async(req,res,next)=>{
    try{
        const credentials = { email: req.body.email , password: req.body.password,data: [] ,memory: 0, usagePercentage: 0,billing: 0};
        const user = new User(credentials);
        if( !user ) return res.status(404).send( { Message: 'Failed to Create a user.' } );
        const token = await user.generateToken();
        await user.save();
        res.send( {token} );
    }
    catch(e){ return next(e); }
});

/**
 * Login router.
 */
router.post('/login', async(req,res,next)=>{
    try{
        const credentials = { email: req.body.email , password: req.body.password }; 
        const user = await User.findOne( {email: credentials.email} );
        if( !user ) return res.status(404).send( { Message: 'User does not exist.' } );
        const isMatch = await bcrypt.compare( credentials.password , user.password );
        if( !isMatch ) return res.status(404).send( { Message: 'Invalid Password.' } );
        const token = await user.generateToken();
        res.send( {token} );
    }
    catch(e){ return next(e); }
});

/**
 * Uploads a file and saves in DB.
 */
router.post('/files/upload',userAuth,upload.single('file'),async (req,res,next)=>{
    try{
        const fileName = req.file.originalname;
        const encoded = (req.file.buffer.toString('base64'));
        for(let i = 0; i < req.user.data.length; i++)
            if( req.user.data[i].name === fileName ){ req.user.data[i].file = encoded; break; }
        const userFileStats = { totalFiles: req.user.data.length, MemoryInUse: req.file.size ,serverLocation: 'Ireland',lastBackUp: Date.now(), SecurityType: 'HTTPS',
                                Billing: (req.file.size/10000) };
        req.user.memory = req.user.memory + req.file.size; req.user.billing = req.user.billing +(req.file.size/100000);
        req.user.usagePercentage = req.user.usagePercentage + 1;
        await (req.user).save();
        res.send( {userFileStats, fileName} );
    }
    catch(e) { return next(e);}
});

/**
 * Uploads a file to AWS bucket.
 */
router.post('/files/aws_upload',userAuth,uploadS3.single('file'),async(req,res,next)=>{
    try{
        req.user.data.push( {file: '', name: req.file.originalname, key: req.file.key.substring(6)});
        await req.user.save();
        res.send( {aws: 'Successfully uploaded to Amazon.'});
    }
    catch(e) { return next(e);}
});

//-------------------------------------- DELETE REQUESTS --------------------------------------------------------------- //

/**
 * Clears a Bucket from all files.
 */
router.delete('/files/clear',userAuth,async(req,res,next)=>{
    try{
        const user = req.user;
        user.data = []; user.memory = 0; user.usagePercentage = 0; user.billing = 0;
        await user.save();
        res.send( {Message: 'Data was Cleared'} );
    }
    catch(e) { return next(e);}
});



module.exports = router;