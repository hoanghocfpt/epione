import mongoose, { Schema } from 'mongoose';

const FeaturedImage = new Schema({
    alt: String,
    position: Number,
    src: String
})
const VariantSchema = new Schema({
    title: String,
    option1: String,
    option2: { type: String, default: null },
    option3: { type: String, default: null },
    sku: String,
    featured_image: {FeaturedImage},
    available: Boolean,
    name: String,
    public_title: String,
    options: [String],
    price: Number,
})

const OptionSchema = new Schema({
    name: { type: String, required: true},
    position: { type: Number },
    values: [String]
})
const ProductSchema = new Schema({
    title: { type: String, required: true },
    handle: String,
    description: String,
    published_at: { type: Date },
    price: Number,
    price_min: Number,
    price_max: Number,
    available: Boolean,
    featured_image: String,
    url: String,
    variants: [VariantSchema],
    options: [OptionSchema],
    images: [String],
    tags: [String],
    collections: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }],
    vendor: { type: String },
    product_type: { type: String },
    status: { type: String, enum: ['draft', 'active', 'archived'], default: 'active' },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)