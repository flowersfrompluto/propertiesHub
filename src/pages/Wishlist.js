import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function Wishlist() {
  const { cart, setCart } = useContext(DataContext);

  const increaseItem = (food) => {
    const initialCart = [...cart];
    const addItem = initialCart.map((cart_item) => {
      if (cart_item.id === food.id) {
        cart_item.quantity += 1;
        cart_item.totalPrice = Math.round(cart_item.quantity * cart_item.price);
      }
      return cart_item;
    });
    setCart(addItem);
    localStorage.setItem("pandorasCart", JSON.stringify(addItem));
  };
  const decreaseItem = (food) => {
    if (food.quantity > 1) {
      const initialCart = [...cart];
      const addItem = initialCart.map((cart_item) => {
        if (cart_item.id === food.id) {
          cart_item.quantity -= 1;
          cart_item.totalPrice = Math.round(cart_item.quantity * cart_item.price);
        }
        return cart_item;
      });
      setCart(addItem);
      localStorage.setItem("pandorasCart", JSON.stringify(addItem));
    }
  };
  const handleDeleteItem = (food) => {
    let confirmDelete = window.confirm("Do you wish to delete this Item");
    if (confirmDelete) {
      const initialCart = [...cart];
      const filterItem = initialCart.filter((item) => item.id !== food.id);
      setCart(filterItem);
      localStorage.setItem("pandorasCart", JSON.stringify(filterItem));
    }
  };

  const totalPrice = [...cart].map((item) => item.totalPrice).reduce((a, b) => a + b, 0);

  /*   function sum() {
    let total = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      total += totalPrice[i];
    }
    return total;
  } */

  return (
    <div className="cartPage">
      {cart.length !== 0 ? (
        <div className="cart_itemContainer">
          {/* <h2>Total Price: ${sum()}</h2> */}
          <h2>Total Price: ${totalPrice}</h2>
          {cart.map((cartItem) => (
            <div className="cart_item" key={cartItem.id}>
              <img src={cartItem.img} alt="Cart Item" />
              <div className="cart_content">
                <h2>{cartItem.name}</h2>
                <h3>${cartItem.price}</h3>
                <div className="cart_btns">
                  <button onClick={() => decreaseItem(cartItem)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => increaseItem(cartItem)}>+</button>
                  <button title="Delete" onClick={() => handleDeleteItem(cartItem)}>
                    x
                  </button>
                </div>
                <h5>Total Price: ${cartItem.totalPrice}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Item In Cart</h3>
      )}
    </div>
  );
}

export default Wishlist;
