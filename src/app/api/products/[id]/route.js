import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Product } from "@/models/product.model";

export async function GET(request,{ params }) {
    const { id } = params
    await connectDB()
    const product = await Product.find({"id": Number(id)});
    return NextResponse.json(product)
}

