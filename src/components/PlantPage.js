import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r=>r.json()))
    .then((data) => {
      setPlants(data);})
  }, [])

  function filterPlants(searchInput) {
      if (searchInput.length === 0) {
        fetch("http://localhost:6001/plants")
        .then((r=>r.json()))
        .then((data) => {
          setPlants(data);})
      } else {
        const filterResults = plants.filter(plant => {
          return plant.name.includes(searchInput);
        });
        setPlants(filterResults)
      }
    }

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search filterPlants={filterPlants}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
