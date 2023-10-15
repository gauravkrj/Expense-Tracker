'use client'
import React, { useState } from 'react';
import './TransactionForm.css';

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  const handleSubmit = () => {
    const newTransaction = {
      amount: parseFloat(amount),
      description,
      type: transactionType,
    };

    // Validate input
    if (amount && description) {
      addTransaction(newTransaction);
      // Clear input fields
      setAmount('');
      setDescription('');
      setTransactionType('expense');
      window.location.reload(); 

    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      
      <form>
        <label htmlFor="amount">Enter Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

        <label htmlFor="transactionType">Transaction Type:</label>
        <select id="transactionType" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button type="button" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
