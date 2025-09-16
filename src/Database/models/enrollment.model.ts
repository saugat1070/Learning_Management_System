import mongoose, { Schema } from "mongoose";

interface IEnrollment extends Document{
    student : mongoose.Types.ObjectId,
    course : mongoose.Types.ObjectId,
    enrolledAt : Date
}

const enrollSchema = new mongoose.Schema<IEnrollment>({
    student : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    course : {
        type : Schema.Types.ObjectId,
        ref : "Course",
        required : true
    },
    enrolledAt : {
        type : Date,
        default : Date.now()
    }
});

const EnrollMent = mongoose.model("Enrollment",enrollSchema);
export default EnrollMent;