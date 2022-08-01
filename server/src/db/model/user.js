const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: { type: String,required: true ,unique: true },
    password: { type: String,required: true },
    data: [{ file: String, name: String, key: String }],
    memory: { type: Number},
    usagePercentage: {type: Number},
    billing: {type: Number}
});

/**
 * Encrypts password if needed before every save.
 */
userSchema.pre('save', async function(next){
    if( this.isModified('password')){
        const userPassword = await bcrypt.hash(this.password,8);
        this.password = userPassword;
    }
    next();
});

/**
 * Generates a unique user token relied on unique user email and secret: PORT.
 * @returns User Token.
 */
userSchema.methods.generateToken = async function () {
    const token = jwt.sign( {email: this.email},process.env.PORT, {expiresIn: "1h" } );
    return token;
}

const User = mongoose.model('User',userSchema);
module.exports = User;