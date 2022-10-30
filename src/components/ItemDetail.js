import { useContext,useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
  const {addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const handleAdd = (value) =>{
    setCount(value);
    setShowItemCount(false);
    addItem(product,value);
  }

    return (
      <div className="itemDetailContainer">
        <Item product={product} />
        {
          showItemCount ? 
          <ItemCount initial={1} stock={10} onAdd={handleAdd}/>
          : 
          <Button variant="success" as={Link} to="/Cart" >Terminar compra</Button>
        }
      </div>
    );
};

export default ItemDetail;