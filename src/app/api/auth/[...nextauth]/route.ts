import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import githubProvider from "next-auth/providers/github"
import dotenv, { config } from "dotenv";
import User from "@/Database/models/user.model";
import connectionDb from "@/Database/connection";
dotenv.config(
    {
        path : "./env/local"
    }
)


const handler  = NextAuth({
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret : process.env.NEXTAUTH_SECRET as string,
    callbacks : {
        async signIn({user}) : Promise<boolean>{
            try {
                await connectionDb();
               const userFind = await User.findOne({
                    email : user?.email
                });
                if(!userFind){
                    await User.create({
                        username : user?.name,
                        email : user?.email,
                        profileImage : user?.image
                    })
                }
                return true;
            } catch (error : any) {
                console.log(error);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST}