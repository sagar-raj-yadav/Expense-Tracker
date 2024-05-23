import React from 'react';
import Balance from './comp/Balance';
import Expensecard from './comp/Expensecard';
import NewTransaction from './comp/Newtransaction';
import Transactions from './comp/Transactions';

import {useState} from 'react';

const App = () => {

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Book', amount: -100},
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);


  return (
    <>
    <Balance transactions={transactions} />
    <Expensecard transactions={transactions} />
    <NewTransaction setTransactions={setTransactions} />
    <Transactions transactions={transactions} />
    </>
  )
}

export default App