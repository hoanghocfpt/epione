import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Product } from "@/models/product.model";

export async function GET(request,{ params }) {
    const { handle } = params
    await connectDB()
    const product = await Product.find({"handle": handle});
    return NextResponse.json(product)
}

