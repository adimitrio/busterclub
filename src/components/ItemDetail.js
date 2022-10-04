import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
    return (
      <>
        <Item product={product} />
        <ItemCount/>
      </>
    );
};

export default ItemDetail;