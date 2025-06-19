import app from "./app";
import mongoose from 'mongoose';

let server;
const port = 5000;

async function main() {
    try {
        await mongoose.connect(process.env.URI || 'mongodb://127.0.0.1:27017/note-app');
        console.log('Connected to DB');
        server = app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
};


main();

