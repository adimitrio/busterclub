import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../utils/products';
import ItemList from './ItemList';
import { doc, getFirestore, getDoc, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const {categoryId} = useParams();
  const [products,setProducts] = useState([]);

  if(categoryId === 'terror'){
    greeting = 'TERROR';
  }
  if(categoryId === 'accion'){
    greeting = 'ACCIÓN';
  }

  useEffect(() => {
    if(categoryId) {    
      getProductsByCategory(categoryId)
      .then((data)=> setProducts(data) )
      .catch((error)=> console.log(error) )  
    }
    else{
      getProducts()
      .then((data)=> setProducts(data) )
      .catch((error)=> console.log(error) )
    }
  },[categoryId])

  return (
    <>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </>
  );
}
 
export default ItemListContainer;