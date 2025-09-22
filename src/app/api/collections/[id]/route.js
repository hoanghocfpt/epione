import { connectDB } from '@/lib/connectDB';
import { Collection } from '@/models/collection.model';
import { Product } from '@/models/product.model';
import { NextResponse } from 'next/server';

export async function GET(req, { params}) {
    await connectDB()
    const id = await params.id
    const collections = await Collection.findById(id);
    const products = await Product.find({ "id": { $in: collections.products } })
    console.log(collections);
    
    return NextResponse.json({ collections, products });
}