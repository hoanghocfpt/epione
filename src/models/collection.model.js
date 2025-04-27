import mongoose, { Schema } from 'mongoose';

const CollectionSchema = new Schema({
    title: String,
    handle: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: '',
    },
    published: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

export const Collection = mongoose.models.Collection || mongoose.model('Collection', CollectionSchema)