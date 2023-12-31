import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
    session: {strategy: "jwt"},
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const {email, password} = credentials;
                secret:process.env.NEXTAUTH_SECRET;
                try {
                    await connectDB();
                } catch(err) {
                    throw new Error("مشکلی در سرور رخ داده است");
                }
                if(!email || !password) 
                throw new Error("لطفاً اطلاعات معتبر وارد کنید");

                const user = await User.findOne({email});
                if(!user) throw new Error("لطفاً ابتدا حساب کاربری ایجاد کنید");
                
                const isValid = await verifyPassword(password, user.password)
                if(!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");
                return {email};
            },
        }),
    ],
    secret:process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};