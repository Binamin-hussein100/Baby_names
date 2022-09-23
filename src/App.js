import './App.css';
import Homepage from './homepage';
import Navigation from './navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid className='application'>
        <Navigation/>
        <Homepage/>
    </Container>
    

    
  );
}

export default App;
