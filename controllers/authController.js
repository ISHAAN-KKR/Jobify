import userModel from "../models/userModel.js";

export const registerController = async (req,res) =>{
    try{
        const {name,email,password} = req.body
        //validate
        if(!name){
            res.status(400).send({
                success:false,
                message:'Please Provide Name'
            })
        }
        if(!email){
            res.status(400).send({
                success:false,
                message:'Please Provide email'
            })
        }
        if(!password){
            res.status(400).send({
                success:false,
                message:'Please Provide password'
            })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Email already registered'
            })
        }
        const user = await userModel.create({name, email, password})
            res.status(201).send({
                success:true,
                message:'User registerd successfully',
                user,
            })
    }catch(error){
        console.log(error);
        res.status(400).send({
            message:'Error in Register Controller',
            success:false,
            error
        })
    }
};
