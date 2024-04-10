import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StoreList from './components/StoreList';
import StoreDetails from './components/StoreDetails';
import Dashboard from './components/Dashboard';

const App = () => {
  // Example default store
  const defaultStore = {
    id: '1',
    name: 'Default Store',
    description: 'This is a default store loaded on application start.',
    imageUrl: 'path/to/default/store/image.jpg',
    backdropUrl: 'path/to/default/store/backdrop.jpg'
  };

  const [stores, setStores] = useState([defaultStore]);
  // Set the default store as selected store on initial load
  const [selectedStore, setSelectedStore] = useState(defaultStore);

  const handleAddStore = (newStore) => {
    const updatedStores = [...stores, { ...newStore, id: Math.random().toString() }];
    setStores(updatedStores);
    // Optionally set the new store as selected
    // setSelectedStore(updatedStores[updatedStores.length - 1]);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <nav style={{ padding: '20px' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Stores</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '30%', borderRight: '1px solid #ccc' }}>
                <StoreList stores={stores} onSelectStore={setSelectedStore} />
              </div>
              <div style={{ width: '70%' }}>
                <StoreDetails store={selectedStore} />
              </div>
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard addStore={handleAddStore} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
