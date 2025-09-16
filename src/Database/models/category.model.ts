import mongoose from "mongoose";

interface ICategory extends Document {
    name : string,
    description : string,
    createdAt : Date
}


const categorySchema = new mongoose.Schema<ICategory>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : String,
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const CourseCategory = mongoose.model("CourseCategory",categorySchema);
export default CourseCategory;