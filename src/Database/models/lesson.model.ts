import mongoose, { Schema } from "mongoose";

interface ILesson extends Document {
    course : mongoose.Types.ObjectId,
    title : string,
    description : string,
    videoUrl : string,
    createdAt : Date
}

const lessonSchema = new mongoose.Schema<ILesson>({
    title : {
        type : String,
        required : true
    },
    course : {
        type : Schema.Types.ObjectId,
        ref : "Course"
    },
    description : {
        type : String,
        required : true
    },
    videoUrl : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})