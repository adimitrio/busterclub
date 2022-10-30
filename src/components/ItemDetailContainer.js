
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProduct } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getProduct(id)
    .then((data) => {setProduct(data)})
    .catch(error => console.log(error) )
  }, [id])
  return (
    <>
      <h3>Detalle del Producto</h3>
      {product && <ItemDetail product={product} />}
    </>
  );
}
 
export default ItemDetailContainer;