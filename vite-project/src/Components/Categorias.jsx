import React,{useState, useEffect} from 'react'

const Categorias = () => {
    const [auto, setAuto] = useState(null);

    useEffect(() => {
    const fetchAuto = async () => {
        try {
          const response = await fetch("/camiones.json");
          const data = await response.json();
          setAuto(data);
        } catch (error) {
          console.error("Error fetching auto:", error);
        }
      };
      fetchAuto();
    }, []);
  
  return (
    <div className="detalle-container">
        <h1>CATEGORIAS</h1>
      <div className="card-container">
        <img src={auto?.imgUrl} alt={auto?.nombre} />
        <h2>{auto?.nombre}</h2>
        <p>Puertas: {auto?.puertas}</p>
        <p>Valijas: {auto?.valijas}</p>
        <p>Personas: {auto?.personas}</p>
        <p className="price">Precio: ${auto?.precio}</p>
      </div>
    </div>
  )
}

export default Categorias
