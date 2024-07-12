import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
    const { name, email, password } = req.body
    // // validate
    // if(!name){
    //     next("name is required")
    // }
    // if(!email){
    //     next("email is required")
    // }
    // if(!password){
    //     next("password is required")
    // }
    // // check if email already exists or not
    // const existingUser = await userModel.findOne({email})
    // if(existingUser){
    //     next("email already registered")
    // }

    const user = await userModel.create({ name, email, password });
    //token
    const token = user.createJWT()
    res.status(201).send({
        success: true,
        message: 'User registerd successfully',
        user:{
            name : user.name,
            lastName : user.lastName,
            email : user.email,
            location : user.location
        },
        token,
    })

};
