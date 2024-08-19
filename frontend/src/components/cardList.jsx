import React from 'react';
import Card from './card';

const CardList = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
