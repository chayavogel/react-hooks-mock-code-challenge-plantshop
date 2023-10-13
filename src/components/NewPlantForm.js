import React, { useState } from "react";

function NewPlantForm( { setPlants } ) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function updateFormState(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit() {

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: formData.price
      })
    })
    .then(r => r.json())
    .then((data) => setPlants(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={updateFormState}/>
        <input type="text" name="image" placeholder="Image URL" onChange={updateFormState}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={updateFormState}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
