import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import TBranch from "@/models/TBranch";

export async function GET(){
    try{
        await connectDB();
        console.log(connectDB);
        const tBranches = await TBranch.find()
        return NextResponse.json(
            {data: tBranches},
            {status: 200}
        );

    }   catch(err){
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        );
    }
}