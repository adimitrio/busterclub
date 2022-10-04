
import {useState} from 'react';
import './ItemCount.css';

const ItemCount = () => {

    const [count, setCount] = useState(1);

    const handleClickPlus = () => {
      setCount(count + 1);
    };
    const handleClick = () => {
        setCount(count - 1);
    };
    return (
      <>
      <div className='row'>
      <div className="col-sm-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button" disabled={count<=1} onClick={handleClick}>-</button>
            </div>
            <input type="text" className="form-control" aria-label="" aria-describedby="basic-addon1" style={{textAlign: "center"}} value={count} disabled></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleClickPlus}>+</button>
            </div>
          </div>
        </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-outline-dark">Agregar al carrito</button>
          </div>
        </div>
      </> 
    );
};

export default ItemCount;