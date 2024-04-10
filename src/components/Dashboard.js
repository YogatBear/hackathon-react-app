import React, { useState } from 'react';

const Dashboard = ({ addStore }) => {
  const [store, setStore] = useState({ name: '', description: '', imageUrl: '', backdropUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStore(store);
    setStore({ name: '', description: '', imageUrl: '', backdropUrl: '' }); // Reset form
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <label>
          Store Name: <span style={{ color: 'red' }}>*</span>
          <input type="text" name="name" value={store.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
        </label>
        <label>
          Description: <span style={{ color: '#ccc' }}>(Optional)</span>
          <input type="text" name="description" value={store.description} onChange={handleChange} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
        </label>
        <label>
          Image Url: <span style={{ color: '#ccc' }}>(Optional)</span>
          <input type="text" name="imageUrl" value={store.imageUrl} onChange={handleChange} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
        </label>
        <label>
          Backdrop Url: <span style={{ color: '#ccc' }}>(Optional)</span>
          <input type="text" name="backdropUrl" value={store.backdropUrl} onChange={handleChange} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
        </label>
        <button type="submit" style={{ padding: '10px',  background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Store
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
