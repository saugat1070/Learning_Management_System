import mongoose from "mongoose";

enum Role{
    Student = "student",
    Admin = "admin"
}

interface IUser extends Document{
    username : string,
    profileImage : string,
    email : string,
    role : Role
}

const userSchema = new mongoose.Schema<IUser>({
    username : {
        type : String,
        required : true,
        
    },
    email : {
        type : String
    },
    profileImage : {
        type : String
    },
    role : {
        type : String,
        enum : [Role.Student,Role.Admin],
        default : Role.Student
    }
});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;