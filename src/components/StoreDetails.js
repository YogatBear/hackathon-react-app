import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRModal = ({ onClose, value }) => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', minHeight: '200px', padding: '20px', background: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', zIndex: 1000, borderRadius: '8px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onClose} style={{ float: 'left', marginRight: '16px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
        <h2>Your Coupon</h2>
      </div>
      <QRCode value={value} size={256} />
      <p style={{ marginTop: '20px' }}>Let the store scan this to redeem the coupon.</p>
    </div>
  );
};

const StoreDetails = ({ store }) => {
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQRValue] = useState('');

  if (!store) return <div>Select a store to see its details.</div>;

  const handlePurchaseClick = (value) => {
    const qrData = `${store.name}|${value}`;
    setQRValue(qrData);
    setShowQR(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{store.name}</h2>
      <img src={store.imageUrl} alt={store.name} style={{ width: '100px', height: '100px' }} />
      <img src={store.backdropUrl} alt={store.name} style={{ width: '100%', height: '200px', display: 'block', margin: '20px 0' }} />
      <p>{store.description}</p>
      <button onClick={() => handlePurchaseClick(5)}>$5 Coupon</button>
      <button onClick={() => handlePurchaseClick(10)}>$10 Coupon</button>
      <button onClick={() => handlePurchaseClick(20)}>$20 Coupon</button>

      {showQR && (
        <QRModal onClose={() => setShowQR(false)} value={qrValue} />
      )}
    </div>
  );
};

export default StoreDetails;
