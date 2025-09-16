import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(
    {
        path:'./env/local'
    }
)

const connectionString : string = process.env.DB_URL as string;

if(!connectionString) throw new Error("You must provide mongodb connection String");


export default async function connectionDb(){
    console.log(mongoose.connection.readyState);
    await mongoose.connect(connectionString)
    .then(()=>{
        console.log("Database connected Succesfully")
    })
    .catch((error : Error)=>{
        console.log("Database connection failed");
        console.log("Error:" + error)
    })
}