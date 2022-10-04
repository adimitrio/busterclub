
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item = ({product}) => {
    return (
      
        <Card style={{ width: '20rem' }}>
          <Link to ={ `/item/${product.id}` } >
            <Card.Img variant="top" src={product.pictureUrl} />
          </Link>
        <Card.Body>
          <Card.Title >{product.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
          
        </Card.Body>
      </Card>
       
    );
};

export default Item;