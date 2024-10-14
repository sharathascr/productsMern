import React from 'react';
import {Routes,Route} from 'react-router-dom'
import ListOfProducts from './components/ListOfProducts';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/userSlice';

function App() {
  const isLogin=useSelector((state)=>state.isLogin);
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(userActions.setLogout())
  }
  return (
    <div>
       
      <Navbar className='' bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
           {!isLogin && <><Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/signup'}>Signup</Nav.Link></>}
            {isLogin && <>
            <Nav.Link as={Link} to={'/listofproducts'}>ListOfProducts</Nav.Link>
            <Nav.Link as={Link} to={'/addproduct'}>AddProducts</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
            }
          </Nav>
          </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/listofproducts' element={<ListOfProducts/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App