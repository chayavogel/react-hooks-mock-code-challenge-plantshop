import React, { useState } from "react";

function PlantCard( {plant} ) {

  const [stocked, setStocked] = useState(true)

  function handleStockedClick() {
    setStocked(!stocked)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
    </li>
  );

}

export default PlantCard;
