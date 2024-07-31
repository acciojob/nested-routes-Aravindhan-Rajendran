import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { item } = useParams();

  return (
    <div>
      <h3>{item}</h3>
      <p>Details about {item}.</p>
    </div>
  );
};

export default Item;
