'use client'
import React, { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm/TransactionForm';
import TransactionList from '../components/TransactionList/TransactionList';
import styles from '../styles/Home.module.css';





function Home() {



  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);

  useEffect(() => {
    //  Fetch transactions from backend
    fetch('http://localhost:3001/api/transactions')
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data.transactions);
      setTotalIncome(data.totalIncome || 0);
      setTotalExpense(data.totalExpense || 0);
      setRemainingBalance(data.remainingBalance || 0);
    });



    
    


  }, []);

  const addTransaction = (newTransaction) => {
  fetch('http://localhost:3001/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setTotalIncome(data.totalIncome || 0);
        setTotalExpense(data.totalExpense || 0);
        setRemainingBalance(data.remainingBalance || 0);
      });



     


  };

  return (
    <div className={styles.container}>

      <div className={styles.navbar}>
         <h1 className={styles.heading}>Expense Tracker</h1>
      </div>

      <div className={styles.body}>
           
         <div className={styles.box1}>

           <div className={styles.box2}>
           <TransactionForm addTransaction={addTransaction}/>
           </div>


            <div className={styles.box3}>
              <TransactionList transactions={transactions} />
            </div>
        </div>


        <div className={styles.box4}>
              
           <div className={styles.summaryheading}><h2>Summary</h2></div>

           <div className={styles.summary}>
              <div className={styles.income}>
                 <strong>Total Income: </strong> ${totalIncome}
              </div>
              
              <div className={styles.expense}>
                 <strong>Total Expense: </strong> ${totalExpense}
              </div>
             
              <div className={styles.balance}>
                  <strong>Remaining Balance: </strong> ${remainingBalance}
              </div>
           </div>
            
        </div>


      
      </div> 

    </div>
  );
}

export default Home;
