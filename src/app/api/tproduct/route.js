import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import TProduct from "@/models/TProduct";

export async function GET() {
    try {
        await connectDB();
      //   const newTproduct = await TProduct.create({
            
      // });
      // console.log(newTproduct);
      const getTproducts = await TProduct.find();
      return NextResponse.json(
        {data: getTproducts},
        { status: 201 },
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "مشکلی در سرور رخ داده است" },
        { status: 500 }
      );
    }
  }
  