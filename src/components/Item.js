import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { item } = useParams();

  return (
    <div>
      <h2>{item}</h2>
      {/* Additional item details can be displayed here */}
    </div>
  );
};

export default Item;