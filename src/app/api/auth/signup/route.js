import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
    try {
        await connectDB();
        const{email, password} = await req.json();
        log({email, password});
        if(!email || !password) {
            return NextResponse.json(
                {error: "لطفاً اطلاعات معتبر وارد نمایید"},
                {status: 422}
            );
        }
        const existingUser = await User.findOne({email});
        console.log(existingUser);
        if(existingUser) {
            return NextResponse.json(
                {error: "این حساب کاربری وجود دارد"},
                {status: 422}
            );
        }
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
        });
        console.log(newUser);
        return NextResponse.json(
            {message: "حساب کاربری با موفقیت ایجاد شد"},
            {status: 201}
        );
    } catch(err) {
        console.log(err);
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        );
    }
}