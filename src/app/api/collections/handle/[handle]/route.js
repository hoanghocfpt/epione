import { connectDB } from '@/lib/connectDB';
import { Collection } from '@/models/collection.model';
import { Product } from '@/models/product.model';
import { NextResponse } from 'next/server';

// export async function GET(req, { params}) {
//     await connectDB()
//     const handle = await params.handle
//     const collection = await Collection.findOne({ handle });
//     const products = await Product.find({ "id": { $in: collection.products } })

//     return NextResponse.json(collection);
// }


export async function GET(req, { params}) {
    await connectDB()
    const handle = await params.handle
    const collection = await Collection.findOne({ handle });
    const products = await Product.find({ "id": { $in: collection.products } })
    
    const collectionResult = collection.toObject()
    collectionResult.product_data = products
    return NextResponse.json(collectionResult);
}