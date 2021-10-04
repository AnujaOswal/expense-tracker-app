import express from 'express';
import { getTransactions, addTransactions ,deleteTransactions } from '../controllers/transactionController.js';

const transaction = express.Router();

transaction
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

transaction
    .route('/:_id')
    .delete(deleteTransactions);
        
export {transaction};