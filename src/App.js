
import './App.css';

import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

  <>
  <NavBar/>
  <Container>
    <ItemListContainer greeting={'Bienvenidos a Buster Club'} />
  </Container>
  </>
      
 
  );
}

export default App;
