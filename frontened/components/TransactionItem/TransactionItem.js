import React from 'react';
import './TransactionItem.css';

function TransactionItem({ transaction }) {
  const transactionTypeClass = transaction.type === 'income' ? 'income' : 'expense';

  return (
    <div className={`item ${transactionTypeClass}`}>
      <p>
        <strong>{transaction.type === 'income' ? 'Income' : 'Expense'}:</strong>{' '}
       {transaction.description}<p><strong>Rs.{transaction.amount}</strong></p>
      </p>
    </div>
  );
}

export default TransactionItem;
