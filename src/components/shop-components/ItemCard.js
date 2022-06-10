import React from 'react';

function ItemCard(props) {
  const {
    card: {src, title, price},
    handleCartState,
  } = props;
  
  return (
    <div className="card">
      <figure>
        <img src={src} alt={title} />
      </figure>
      <p>{price}</p>
      <button className="add-to-cart" onClick={handleCartState.bind(this)}>Add to Cart</button>
    </div>
  )
}

export default ItemCard;