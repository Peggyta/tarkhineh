import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import TProduct from "@/models/TProduct";

export async function GET(req) {
    try {
        await connectDB();
        const getFood = await TProduct.find();
        const {searchParams} = new URL(req.url)
        console.log(req.url);
        const title = searchParams.get('title');
        const filterFood = getFood.filter((i)=> i.title.includes(title) === title.includes(title));
        return NextResponse.json(filterFood)

    } catch(err) {
        return NextResponse.json(
            {error: "مشکلی در سرور رخ داده است"},
            {status: 500}
        )
    }
}