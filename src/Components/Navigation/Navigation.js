import React, { useContext } from 'react';
import './Navigation.Module.css'; // Import CSS file directly
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartButton from './CartButton/CartButton';
import { AuthContext } from '../../Store/Context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FaUser } from 'react-icons/fa';
import { Button } from 'react-bootstrap'; 
import Profile from './UserProfile/Profile'

const Navigation = (props) => {
  const authctx = useContext(AuthContext);
  const history = useHistory();  

  const handleLogout = () => {
    authctx.logout();
    history.push('/login');
  }

  return (
    <div className="navigation"> 
      <Navbar bg="dark" data-bs-theme="dark" className="navi"> 
        <Container>
          <Navbar.Brand href="#home">BeautyBar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" href="#about">About</Nav.Link>
            <Nav.Link as={Link} to="/store" href="#store">Store</Nav.Link>
            <Nav.Link as={Link} to="/contact" href="#contact">Contact</Nav.Link>
          </Nav>
           

           {authctx.isLoggedIn && <CartButton cartShowHandler={props.cartShowHandler}/>}

          {!authctx.isLoggedIn && 
           <Button className='login-button'
           style={{ backgroundColor: ' #ff1f69', color: 'white'  ,border: "1px solid #ffffff"  , transition: 'all 0.3s'}} 
           onClick={() => { history.push('/login')}}   
          > 
          <FaUser className="navIcon" /> 𝕷𝖔𝖌𝖎𝖓  </Button>
          } 

          {authctx.isLoggedIn && 
           <Button className='logout-button'
           style={{ backgroundColor: ' #ff1f69', color: 'white'  ,border: "1px solid #ffffff"  , transition: 'all 0.3s'}} 
           onClick={() => {handleLogout(); }}   
          > 
          <FaUser className="navIcon" /> 𝕷𝖔𝖌𝖔𝖚𝖙 </Button>
          } 
            

          <Profile/>

        </Container>
      </Navbar>
      {props.children} 
    </div>
  );
}

export default Navigation;
