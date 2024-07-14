import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
    const { name, email, password } = req.body
    // validate
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
        user: {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            location: user.location,
        },
        token,
    })
};

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide all fields' });
        }

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // Compare passwords
        const isMatch = await user.comparePasswords(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // Create token
        const token = user.createJWT();
        res.status(200).json({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
            token,
        });
    } catch (error) {
        // Pass errors to error-handling middleware
        next(error);
    }
};

