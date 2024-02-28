import React, { useEffect, useState } from "react";
import Buscador from "../Components/Buscador";
import Card from "../Components/Card";
import "../Styles/Home.css";
import Categorias from "../Components/Categorias";

const Home = () => {
  const [autos, setAutos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [shuffledAutos, setShuffledAutos] = useState([]);

  // Función para mezclar el arreglo de manera aleatoria
  const shuffleArray = (array) => {
    const shuffledArray = array.slice(); // Clonar el arreglo para no modificar el original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

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
        setShuffledAutos(shuffleArray(data)); // Mezclar el arreglo al cargar los datos
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
          : shuffledAutos.map((auto) => <Card key={auto.id} auto={auto} />)}
      </div>
    </div>
  );
};

export default Home;

