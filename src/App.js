import React, { useContext, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Pages/About/About";
import Contact from "./Pages/ContactUs/Contact";
import ProductDetails from "./Pages/productdetails/ProductDetails";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { AuthContext } from "./Store/Context/AuthContext";
import { Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProductStore from "./Pages/ProductStore/ProductStore";

const App = () => {
  const authctx = useContext(AuthContext)
  const [showCart, setShowCart] = useState(false);
  const location = useLocation()

  const cartShowHandler = () => {
   console.log("true")
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };

  return (
      
    <div>

     <Navigation cartShowHandler={cartShowHandler} />
     {showCart && <Cart cartCloseHandler={cartCloseHandler} />}

      <main>
        <Redirect from="/" to="/home" />
        <Route path='/home' exact > <HomePage/> </Route>
      
        <Route path="/store" exact>     
                <ProductStore cartShowHandler={cartShowHandler} />
        </Route>
 
        <Route path='/store/:productid'><ProductDetails/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/contact'><Contact/> </Route>
        <Route path="/login"> { !authctx.isLoggedIn && <LoginPage />  } </Route>

      </main>

      {location.pathname !== "/login" && <Footer />}

      </div>  
  );
};
export default App;