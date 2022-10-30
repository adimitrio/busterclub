import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
    <Link style={{cursor: "pointer"}} to='/cart'>
      <FaShoppingCart /> 
      <Badge bg="secondary" id="badge-cart" >{ totalQuantity }</Badge>
      <span className="visually-hidden">cantidad de productos</span>
    </Link>
    </>
  );
}
 
export default CartWidget;