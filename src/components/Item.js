import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { item } = useParams(); // Retrieve the item parameter from the URL

  return (
    <div>
      <p>Selected Item: {item}</p> {/* Display the selected item */}
    </div>
  );
};
