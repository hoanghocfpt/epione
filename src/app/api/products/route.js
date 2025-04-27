import { connectDB } from '@/lib/connectDB';
import { Product } from '@/models/product.model';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB()
    const products = await Product.find({});
    return NextResponse.json(products);
}

export async function POST(request) {
    await connectDB();
    const body = await request.json()
    const product = await Product.create(body)
    return NextResponse.json(product)
}