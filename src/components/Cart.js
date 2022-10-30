import { useContext, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { createOrder } from "../utils/orders";
import OrderModal from "./OrderModal";

const buyerMock = {
  name: 'Adrian Di Mitrio',
  phone: '1132027888',
  email: 'adriane@mail.com'
}

const Cart = () => {

  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }


  return (
    <>
      <h3>CARRITO DE COMPRAS</h3>
      {cart.length > 0 ? (
      <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pelicula</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><FaTrashAlt style={{cursor: "pointer"}} onClick={ () => handleRemove(item.id) }/></td>
          </tr>
          ))}
        </tbody>
      </Table>
      < h3>Total: $ {total}</h3>
      <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
      </>
      ) : (<><h3>Aun no hay productos en el carrito</h3> <Button  as={Link} to="/" variant="success">Ver productos</Button></>)
      
      }
      <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
      />
    </>
  );
}
 
export default Cart;