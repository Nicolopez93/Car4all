import React, { useState } from 'react';

const AgregarProducto = () => {
  const [productName, setProductName] = useState('');
  const [puertas, setPuertas] = useState(0);
  const [valijas, setValijas] = useState(0);
  const [personas, setPersonas] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [idCount, setIdCount] = useState(11);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      id : idCount,
      imgUrl: productImage,
      nombre: productName,
      puertas: parseInt(puertas),
      valijas: parseInt(valijas),
      personas: parseInt(personas),
      precio: parseFloat(precio),
    };

    try {
      // Obtener los datos actuales del JSON
      const response = await fetch('/autos.json');
      const data = JSON.stringify(response);

      // Agregar el nuevo producto a los datos existentes
      const newData = [...data, newProduct];
      
      setIdCount(idCount + 1);
      // Actualizar el archivo JSON con los nuevos datos
      const updatedResponse = await fetch('/autos.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (updatedResponse.ok) {
        console.log('Producto agregado exitosamente:', newProduct);
        // Aquí puedes manejar la lógica adicional si es necesario
      } else {
        console.error('Error al actualizar el archivo JSON');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Auto:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>Cantidad de Puertas:</label>
          <input
            type="number"
            value={puertas}
            onChange={(e) => setPuertas(e.target.value)}
          />
        </div>
        <div>
          <label>Cantidad de Valijas:</label>
          <input
            type="number"
            value={valijas}
            onChange={(e) => setValijas(e.target.value)}
          />
        </div>
        <div>
          <label>Cantidad de Personas:</label>
          <input
            type="number"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
