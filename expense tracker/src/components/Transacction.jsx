
import React from 'react'
import styles from './Transacction.module.css';


const Transactioncell=(props)=>{
    return(
        <>
        <div className={styles.container2}>
            <p>{props.payload.description}</p>
            <p>{props.payload.amount}</p>
        </div>
        </>
    )
}
const Transacction = (props) => {
    
  return (
    <>
        <h1 style={{textAlign:"center",marginTop:"20px"}}>Transaction</h1>
    <div className={styles.container}>
        <input type="text" className={styles.searchinput} placeholder="Search..." />
    </div>

    <div className={styles.container3}>
   { props.transactions?.length?props.transactions.map((payload)=>(<Transactioncell payload={payload} /> )) :"" }
    </div>
    </>
  )
}

export default Transacction