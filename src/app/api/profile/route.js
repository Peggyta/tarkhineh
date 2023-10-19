import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function GET() {
    try{
        await connectDB();
        const profile = await Profile.findOne({_id});
        return NextResponse.json(
            {data: profile},
            {status: 200}
        );
        
    } catch(err) {
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        )
    }
};

export async function POST(req) {
    try {
        await connectDB();
        const {
            userName,
            birthday,
            firstName,
            lastName,
            phone,
        } = await req.json();
        const session = await getServerSession(req);
        if(!session) {
            return NextResponse.json(
                {error: "لطفاً وارد حساب کاربری خود شوید"},
                {status: 401}
            );
        }
        const user = await User.findOne({email: session.user.email});
        if(!user) {
            return NextResponse.json(
                {error: "حساب کاربری یافت نشد"},
                {status: 404}
            );
        }
        if(
            !userName ||
            !firstName ||
            !lastName ||
            !birthday ||
            !phone
        ) {
            return NextResponse.json(
                {error: "لطفاً اطلاعات معتبر وارد نمایید"},
                {status: 400}
            );
        }
        const newProfile = await Profile.create({
            userName,
            phone,
            firstName,
            lastName,
            birthday,
            userId: new Types.ObjectId(user._id)
        });
        return NextResponse.json(
            {message: "اطلاعات شخصی با موفقیت اضافه شد"},
            {status: 201}
        )
    } catch(err) {
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        )
    }
};

export async function PATCH(req) {
    try {
        await connectDB();
        const {
            _id,
            firstName,
            lastName,
            birthday,
            phone,
            userName
        } = await req.json();
        // console.log({_id, firstName, lastName, phone});
        const session = await getServerSession(req);
        if(!session) {
            return NextResponse.json(
                {error: "لطفاً ابتدا وارد حساب کاربری خود شوید"},
                {status: 401}
            );
        }
        const user = await User.findOne({email: session.user.email});
        if(!user) {
            return NextResponse.json(
                {error: "حساب کاربری یافت نشد"},
                {status: 404}
            );
        }
        if(
            !_id ||
            !firstName ||
            !lastName ||
            !phone ||
            !birthday ||
            !userName  
        ) {
            return NextResponse.json(
                {error: "لطفاً اطلاعات معتبر وارد نمایید"},
                {status: 400}
            );
        }
        const profile = await Profile.findOne({userId:_id});
        // console.log(profile, 'profile');
        if(profile && !user._id.equals(profile.userId)) {
            return NextResponse.json(
                {error: "دسترسی شما به این بخش محدود شده است"},
                {status: 403}
            );
        }
        profile.firstName = firstName;
        profile.lastName = lastName;
        profile.birthday = birthday;
        profile.phone = phone;
        profile.userName = userName;
        profile.save();
        return NextResponse.json(
            {message: "اطلاعات با موفقیت ویرایش شد"},
            {status: 200}
        );
    } catch(err) {
        console.log(err);
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        )
    }
}