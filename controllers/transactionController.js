import {TransactionModel} from "../models/TransactionModel.js"

// @desc    Get all transactions
// @route   GET /ap1/v1/transactions
// @acess   Public
const getTransactions= async (req, res, next)=>{
    try {
        const transactions = await TransactionModel.find(); //it will fetch all the transactions
        return res.status(200).json({
          success: true,
          count: transactions.length, //count will store the no. of transaction in the reponses
          data: transactions, //actual trasactions will be stored here in data
        });
      } catch (error) {
        return res.status(500).json({
          // 500 reponse means server error
          success: false,
          error: "Server Error",
        });
      }
}

// @desc    add all transactions
// @route   POST /ap1/v1/transactions
// @acess   Public
const addTransactions= async (req, res, next)=>{
    try {
        const { text, amount } = req.body;
        //text and amount from the client
    
        const transaction = await TransactionModel.create(req.body);
        //it will insert the transaction into database while getting created in client side
        //req.body will accept only text and amount coz in the schema what we have mentioned
    
        return res.status(201).json({
          //201: when something's got created and is sucessful
          success: true,
          data: transaction,
        });
      } catch (error) {
        if (error.name === "ValidationErroror") {
          const messages = Object.values(error.errors).map((val) => val.message);
    
          return res.status(400).json({
            // 400: when client sent a wrong value
            success: false,
            error: messages,
          });
        } else {
          return res.status(500).json({
            // 500 reponse means server error
            success: false,
            error: "Server Error",
          });
        }
      }
}

// @desc    DELETE all transactions
// @route   DELETE /ap1/v1/transactions
// @acess   Public
const deleteTransactions= async (req, res, next)=>{
    try{
        const transaction = await TransactionModel.findById(req.params._id);
        if (!transaction) {
            //i.e if no transacction found
            return res.status(404).json({
              success: false,
              error: "No transaction",
            });
          }
          
            await transaction.remove();
          //it will remove the transaction(resource)
      
          return res.status(200).json({
            success: true,
            data: {},
          });
        
      
          
        }
        catch (error)
        {

        }
    }

export {
    getTransactions,
    addTransactions,
    deleteTransactions
}