import React from 'react';
import '../App.css';
import CardContainer from './shop-components/CardContainer';

function Shop() {
  return (
    <div>
      <h2>Shop</h2>
      <div className="item-card-container" id="card-container">
        <CardContainer /*handleCartState={handleCartState}*/ />
      </div>
    </div>
  )
}

export default Shop;