import mongoose, { Schema } from "mongoose"
interface ICourse extends Document {
    title : string,
    description : string,
    coursePrice : number,
    courseDuration : string,
    duration : string
    category : mongoose.Types.ObjectId,
    lessons : mongoose.Types.ObjectId[],
    createdAt : Date
}

const courseSchema = new mongoose.Schema<ICourse>({
    title : {
        type : String,
        required : true
    },
    description : String,
    coursePrice : Number,
    courseDuration : String,
    category : {
        type : Schema.Types.ObjectId,
        ref : "CourseCategory"
    },
    lessons :[ {
        type : Schema.Types.ObjectId,
        ref : "Lessons"
    }],
    createdAt : {
        type : Date,
        default : Date.now()
    }

});


const Course = mongoose.model("Course",courseSchema);
export default Course;