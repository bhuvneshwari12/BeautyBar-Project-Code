import React, { useContext, useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';
import { AuthContext } from './AuthContext';

const defaultCartState = { items: [], totalPrice: 0, totalQuantity: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalPrice = state.totalPrice + action.item.price;
    const updateTotalQuantity = state.totalQuantity + 1;

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    let updateItem;
    if (existingItem) {
      updateItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      const newItem = { ...action.item, quantity: 1 };
      updateItems = state.items.concat(newItem); 
    }

    return { items: updateItems, totalQuantity: updateTotalQuantity, totalPrice: updateTotalPrice };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(item => item.id === action.itemId);
    const existingItem = state.items[existingItemIndex];

    if (!existingItem) {
      return state;
    }

    const updatedTotalPrice = state.totalPrice - existingItem.price;
    const updatedTotalQuantity = state.totalQuantity - 1;

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.itemId);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalPrice: updatedTotalPrice, totalQuantity: updatedTotalQuantity };
  }

  if (action.type === 'FETCH') {
    if (!action.data) { 
      return state; 
    }
    return {
      ...state,
      items: action.data.items || [],
      totalPrice: action.data.totalPrice || 0,
      totalQuantity: action.data.totalQuantity || 0
    };
  }

  return defaultCartState;
};
 
const CartProvider = (props) => {
 
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [postData, setPostData] = useState(false);
  const userEmail = localStorage.getItem('email');
  const userName = userEmail && userEmail.split('@')[0];
  const fetchUrl = `https://beauty-bar-91ebe-default-rtdb.firebaseio.com/beauty/${userName}.json`;
  console.log(fetchUrl)
  console.log(userEmail)
  console.log(userName)


  useEffect(() => {
    if (postData) {
      fetch(fetchUrl, {
        method: 'PUT',
        body: JSON.stringify({
          items: cartState.items,
          totalPrice: cartState.totalPrice,
          totalQuantity: cartState.totalQuantity
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          console.log(res);
          setPostData(false);
        })
        .catch(error => console.error('Error updating cart data:', error));
    }
  }, [postData, cartState.items, cartState.totalPrice, cartState.totalQuantity, fetchUrl]);

  useEffect(() => {
    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        } 
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatchCart({ type: "FETCH", data: data });
      })
      .catch(error => console.error('Error fetching cart data:', error));
  }, [userName, fetchUrl]);

  const addCartItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
    setPostData(true);
  };

  const removeCartItemHandler = (itemId) => {
    dispatchCart({ type: "REMOVE_ITEM", itemId: itemId });
    setPostData(true);
  };

  const value = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQuantity: cartState.totalQuantity,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler 
  }; 

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};  

export default CartProvider;