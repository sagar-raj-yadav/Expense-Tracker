import React, { useState } from 'react';
import styles from './Overview.module.css';


const AddTransactionview=(props)=>{

    
    const [amount,setamount]=useState();
    const [description,setdescription]=useState();
    const [type,settype]=useState("EXPENSE");
    
    const addtransaction=()=>{
      props.addTransaction({amount:Number(amount),description,type,id:Date.now()})
        props.setisAddvisible();
    }

    return(
        <div className={styles.transactionForm}>
        <input className={styles.textInput} placeholder="Amount" type='number' value={amount} onChange={(e)=>setamount(e.target.value)} />
        <input className={styles.textInput} placeholder="Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
        <div className={styles.radioGroup}>
          <input type="radio" id="expense" name="type" value="EXPENSE"  checked={type==="EXPENSE"} onChange={(e)=>settype(e.target.value)} />
          <label style={{backgroundColor:'rgb(233, 64, 64)'}} for="expense"  >EXPENSE</label>
          <span style={{padding:"70px"}}>
          <input  type="radio" id="income" name="type" value="INCOME"  checked={type==="INCOME"}  onChange={(e)=>settype(e.target.value)}/>
          <label style={{backgroundColor:'green'}} htmlFor="income">INCOME</label>
          </span>
        </div>
        <button className={styles.addButton} onClick={addtransaction}>Add Transaction</button>
      </div>
    )
}


const Overview = (props2) => {
    
    const clickonadd=()=>{
        if(isAddvisible===false)
            setisAddvisible(true);
        else
        setisAddvisible(false);
    }

    const [isAddvisible,setisAddvisible]=useState(false);


  return (
    <>
    <h1 style={{textAlign:"center"}}>Expense Tracker</h1>
<div className={styles.maincontainer}>
       <div className={styles.balance}>
        <h3>Balance: $1000</h3>
        <button className={styles.addbut} onClick={clickonadd}>{isAddvisible?"CANCEL":"ADD"}</button> 
       </div>
    <div> {isAddvisible &&
            <AddTransactionview setisAddvisible={setisAddvisible}
             addTransaction={props2.addTransaction}/>}
    </div>

    <div className={styles.container3}>
      <div className={styles.expense}><p>EXPENSE:</p><span>$7000</span></div>
      <div className={styles.income}><p>INCOME : </p><span>$10,000</span></div>
    </div>


</div>
    </>
  )
}

export default Overview;

// 1) onClick={()=>setisAddvisible(!isAddvisible) -> hum ye line bhi likh sakte h (cancel and add wale button pe)

//  2) setisAddvisible={setisAddvisible}  and props.setisAddvisible();  -> inn dono ke wajah se jaise hi add transaction pe click karte h , to form hide ho jata h.
