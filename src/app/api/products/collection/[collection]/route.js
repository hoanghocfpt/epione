import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Product } from "@/models/product.model";

export async function GET(request,{ params }) {
    const { collection } = params
    await connectDB()
    const product = await Product.find({ collection })
    return NextResponse.json(product)
}

