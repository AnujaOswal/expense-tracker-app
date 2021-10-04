import React ,{ useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction} from './Transaction';

const TranscationList = () => {
  const { transactions,  getTransactions } = useContext(GlobalContext);
//console.log(GlobalContext)
  //we use useEffect when we make http request from a component
 
  useEffect(() => {
    console.log(transactions)
    getTransactions()
    // console.log( getTransactions());
     // eslint-disable-next-line
  },[]) //it will run only once

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
        
      </ul>
    </>
  )
}

export default TranscationList
