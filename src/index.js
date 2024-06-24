import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Store/Context/CartProvider';
import AuthContextProvider from './Store/Context/AuthContext';

const root = document.getElementById('root');

createRoot(root).render(
  <AuthContextProvider>
    <BrowserRouter basename="BeautYBar">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
