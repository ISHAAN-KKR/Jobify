import mongoose from 'mongoose';
import validator from 'validator';

//import encryption
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: validator.isStrongPassword,
        select: true
    },
    location: {
        type: String,
        default: "India"
    }
}, { timestamps: true })
//middleware encryption
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})
userSchema.methods.comparePasswords = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};
//JWT
userSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}
export default mongoose.model('Users', userSchema)