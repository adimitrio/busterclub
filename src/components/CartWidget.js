import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';

const CartWidget = () => {
  return (
    <>
    <Link style={{cursor: "pointer"}} to='/cart'>
      <FaShoppingCart /> 
      <Badge bg="secondary" id="badge-cart" >0</Badge>
      <span className="visually-hidden">cantidad de productos</span>
    </Link>
    </>
  );
}
 
export default CartWidget;