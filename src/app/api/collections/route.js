import { connectDB } from '@/lib/connectDB';
import { Collection } from '@/models/collection.model';
import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB()
    const collections = await Collection.find();
    return NextResponse.json(collections);
}

export async function POST(request) {
    await connectDB();
    const body = await request.json()
    const collection = await Collection.create(body)
    return NextResponse.json(collection)
}