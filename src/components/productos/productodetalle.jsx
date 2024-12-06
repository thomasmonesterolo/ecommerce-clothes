import React from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { productoId } = useParams(); // Obtiene el ID del producto de la ruta

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Estás viendo el producto: {productoId}</p>
    </div>
  );
};

export default ProductoDetalle;