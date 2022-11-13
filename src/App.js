import './App.css';
import Homepage from './homepage';
import Navigation from './navbar';
import LandingPage from './landingPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <Container fluid className='application'>
        <Navigation/>
        <LandingPage/>
          {/* <Routes>
              <Route path='/' exact element={<Homepage/>}/>  
              <Route path='/landing' element={}/> 
          </Routes> */}
           
    </Container>
    

    
  );
}

export default App;
