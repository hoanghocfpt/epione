import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) throw new Error('MONGO_URL bị lỗi')

export const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log('Database đã sẵn sàng');
        return
    }
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Đã kết nối MongoDB');
        
    } catch (error) {
        console.error('Lỗi kết nối tới MongoDB', error);
        throw error
    }
}