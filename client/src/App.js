import React from 'react'
import Header from './components/Header.js'
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TranscationList from './components/TranscationList.js';
import {AddTransaction} from './components/AddTransaction.js';
import './App.css';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div>
    <GlobalProvider>
      <Header/>
      <div className="conatiner">
        {/* displaying balance */}
        <Balance/>
        {/* showing income and expense */}
        <IncomeExpenses/>
        {/* showing transcation history done before(transcation track) */}
        <TranscationList/>
        {/* adding new transcation expense */}
        <AddTransaction />
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
