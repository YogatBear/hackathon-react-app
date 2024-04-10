import React from 'react';

const StoreList = ({ stores, onSelectStore }) => {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      {stores && stores.map(store => (
        <div key={store.id} onClick={() => onSelectStore(store)} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
          <h3>{store.name}</h3>
          <p>{store.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
