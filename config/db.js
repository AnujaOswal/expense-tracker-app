import mongoose from "mongoose";

const connectDB = async () =>
{
    try{
        const conn = await 
        mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true,
            //these three are beng set to true as mongoDB throw us warnings
        });
        console.log(`MongoDB Connected--> ${conn.connection.host}`.cyan.underline.bold);

    } catch(err)
    {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

export {connectDB}