import mongoose from 'mongoose';

const jobSchmea = new mongoose.Schema({
    company:{
        type:String,
        required: [true,'Company name is Required']
    },
    position:{
        type:String,
        required: [true,'Job Position is Required'],
        minlength: 100
    },
    status:{
        type:String,
        enum: ['pending', 'reject', 'Interview'],
        default:'pending'
    },
    workType:{
        type: String,
        enum:['full-time','part-time','internship','contract'],
        default:'full-time'
    },
    workLocation:{
        type:String,
        default:'Mumbai'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }
},{timestamps:true})

export default mongoose.model('Job', jobSchmea)