import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import kettlebell from './shop-images/kettlebell.png';
import clubbell from './shop-images/clubbell.jpeg';
import barbell from './shop-images/barbell.jpeg';
import dumbbell from './shop-images/dumbbell.jpeg';

function CardContainer() {
  //const { handleCartState } = props;

  const items = [
      {
          src: kettlebell,
          title: 'Kettlebell',
          price: '$300.00',
      },
      {
          src: clubbell,
          title: 'Clubbell',
          price: '$250.00',
      },
      {
          src: barbell,
          title: 'Barbell',
          price: '$100.00',
      },
      {
          src: dumbbell,
          title: 'Dumbbell',
          price: '$75.00',
      },
  ];

  const [cards, setNewCards] = useState(items);

  useEffect(() => {
      const newCards = [...cards];
      setNewCards(newCards);
  }, []);

  return (
    <div>
        {cards.map((card) => (
            <ItemCard card={card} key={card.title} /*handleCartState={handleCartState}*/ />
        ))}
    </div>
  )
}

export default CardContainer;