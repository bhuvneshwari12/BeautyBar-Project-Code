import Modal from '../../UI/Modal/Modal'
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CartContext from "../../Store/Context/CartContext";
import './Cart.css'

const Cart = (props) => {
  const ctx = useContext(CartContext)
  const list = ctx.items

  const addItemHandler = (goods) => {
    ctx.addItem(goods)
  }

  const removeItemHandler = (goodsId) => {
    ctx.removeItem(goodsId)
  }

  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      <div className="cart-wrapper">
        <ul className="cart-list">
          {list.map((goods) => (
            <li key={goods.id} className="cart-item">
              <Card className="cart-card">
                <img src={goods.image} alt={goods.title} className="cart-image" />
                <Card.Body className="product-card-body">
                  <Card.Title >{goods.title}</Card.Title>
                  <Card.Text>${goods.price}</Card.Text>
                  <Card.Text>Quantity: {goods.quantity}</Card.Text>

                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => { addItemHandler(goods) }} > + </button>
                    <span className="quantity">1</span>
                    <button className="quantity-btn" onClick={() => { removeItemHandler(goods.id) }}>-</button>
                  </div>

                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h2>Total Amount:</h2>
          <h2>${ctx.totalPrice.toFixed(1)}</h2>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;