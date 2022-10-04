import Item from "./Item";
import './ItemList.css';
import CardGroup from 'react-bootstrap/CardGroup';


const ItemList = ({ products = []}) => {
    return (
      <div className="itemList">
        <CardGroup>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
        </CardGroup>
      </div>
    );
};

export default ItemList;