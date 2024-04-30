// src/components/TransactionForm.js
import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ description, amount, date, category });
        setDescription('');
        setAmount('');
        setDate('');
        setCategory('');
    };
   
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            {/* Dropdown to select category */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Transportation">Transportation</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
