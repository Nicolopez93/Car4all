import React, { useEffect, useState } from "react";
import Buscador from "../Components/Buscador";
import Card from "../Components/Card";
import "../Styles/Home.css";


const Home = () => {
  const [autos, setAutos] = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const filteredAutos = autos.filter((auto) =>
      auto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredAutos);
  };

  useEffect(() => {
    const fetchAuto = async () => {
      try {
        const response = await fetch("/autos.json");
        const data = await response.json();
        setAutos(data);
      } catch (error) {
        console.error("Error fetching auto:", error);
      }
    };
    fetchAuto();
  }, []);


  return (
    <div>
      <Buscador onSearch={handleSearch} />
      <div className="autos-container">
        {searchResults.length > 0
          ? searchResults.map((auto) => (
              <Card key={auto.id} auto={auto} />
            ))
          : autos.map((auto) => <Card key={auto.id} auto={auto} />)}
      </div>
    </div>
  );
};

export default Home;
