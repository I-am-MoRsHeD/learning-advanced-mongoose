import app from "./app";
import mongoose from 'mongoose';

let server;
const port = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://mongoose-test:mongoose1234@cluster0.dospc0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to DB');
        server = app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
};


main();

