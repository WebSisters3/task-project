import mongoose from 'mongoose';

mongoose.connection.on('error', (err) => {
    console.log('Connection error', err);
});
export default function connectMongoose() {
    return mongoose

        .connect(process.env.MONGODB_CONNECTION_STR)
        .then((mongoose) => mongoose.connection);
}

