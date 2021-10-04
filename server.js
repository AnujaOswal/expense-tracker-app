import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import { transaction } from './routes/transaction.js';

dotenv.config({ path : "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.use('/api/v1/transaction',transaction);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }
  
app.get('/', (req, res) => res.send('HELllo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port
${PORT}`.bgCyan.bold));

