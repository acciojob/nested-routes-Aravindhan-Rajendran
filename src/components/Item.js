import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { item } = useParams();

  return (
    <div>
      <p>Selected Item: {item}</p>
    </div>
  );
};

export default Item;