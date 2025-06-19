import mongoose, { Connection } from 'mongoose';

mongoose.connection.on('error', (err: Error) => {
    console.log('Connection error', err);
});

export default function connectMongoose(): Promise<Connection> {
    return mongoose
        .connect(process.env.MONGODB_CONNECTION_STR as string)
        .then((mongooseInstance) => mongooseInstance.connection);
}

