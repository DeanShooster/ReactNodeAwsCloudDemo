const jwt = require('jsonwebtoken');
const User = require('../db/model/user');

const userAuth = async (req ,res ,next ) => {
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token,process.env.PORT);
        const user = await User.findOne( {email: decoded.email} );
        if( !user ) return res.status(404).send( {Message: 'No Authentication.'} );
        req.user = user;
        next();
    }
    catch(e) { res.status(403).send( {Message: 'No Authentication.'} ) }
}

module.exports = userAuth;