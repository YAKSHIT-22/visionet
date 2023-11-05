import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URL;
async function mongoConnect() {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URL).then((res) => {
        console.log('MongoDB connected');
    });
}

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
  
module.exports = { mongoConnect };