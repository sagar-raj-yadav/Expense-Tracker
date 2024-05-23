
import React, { useState } from 'react'
import Overview from './Overview';
import Transacction from './Transacction';

const Expense = () => {

    const [transaction,updatetransaction]=useState([]);
    
    const addTransaction=(payload)=>{
        const transactionArray=[...transaction];
        transactionArray.push(payload);
        updatetransaction(transaction);
    }

  return (
   <>

   
   <Overview transaction={transaction} />
   <Transacction addTransaction={addTransaction} />
   </>
  )
}

export default Expense