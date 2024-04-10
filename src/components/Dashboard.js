// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = ({ addStore }) => {
  const [store, setStore] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add logic to add the store to your state or database
    addStore(store);
    setStore({ name: '', description: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <label>
        Store Name:
        <input type="text" name="name" value={store.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={store.description} onChange={handleChange} />
      </label>
      <button type="submit">Add Store</button>
    </form>
  );
};

export default Dashboard;
