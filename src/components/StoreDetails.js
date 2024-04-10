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

  // Default images
  const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Light_Blue_Circle.svg/1024px-Light_Blue_Circle.svg.png'; // Update this path to your default image
  const defaultBackdropUrl = 'https://www.color-hex.com/palettes/17896.png'; // Update this path to your default backdrop
  if (!store) return <div>Select a store to see its details.</div>;

  const handlePurchaseClick = (value) => {
    const qrData = `${store.name}|${value}`;
    setQRValue(qrData);
    setShowQR(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <img src={store.backdropUrl || defaultBackdropUrl} alt="Backdrop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, transparent, white)' }}></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
        <img src={store.imageUrl || defaultImageUrl} alt={store.name} style={{ marginRight: '20px', width: '100px', height: '100px', objectFit: 'fill' }} />
        <div>
          <h2 style={{ marginBottom: '0.5em' }}>{store.name}</h2>
          <p>{store.description}</p>
        </div>
      </div>
      <div style={{ paddingLeft: '20px', width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <button onClick={() => handlePurchaseClick(20)} style={{ padding: '10px', background: '#4c83c3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>$20 Coupon</button>
      </div>

      {showQR && (
        <QRModal onClose={() => setShowQR(false)} value={qrValue} />
      )}
    </div>
  );
};


export default StoreDetails;
