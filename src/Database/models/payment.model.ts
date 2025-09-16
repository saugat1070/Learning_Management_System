import mongoose, { mongo, Schema } from "mongoose";


enum Status {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}

interface IPayment extends Document{
    student : mongoose.Types.ObjectId,
    course : mongoose.Types.ObjectId,
    amount : number,
    status : Status
}


const paymentSchema = new mongoose.Schema<IPayment>({
    student : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    course : {
        type : Schema.Types.ObjectId,
        ref : "Course"
    },
    amount : Number,
    status : {
        type : String,
        enum : [Status.Completed,Status.Failed,Status.Pending],
        default : Status.Pending
    }

})

const Payment = mongoose.model("Payment",paymentSchema);
export default Payment;