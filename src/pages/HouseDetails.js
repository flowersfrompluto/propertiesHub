import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { DataContext } from "../contexts/DataContext";

function HouseDetails() {
  const [food, setFood] = useState({});
  const { setCart, cart } = useContext(DataContext);
  const { id } = useParams();

  const handleAddToCart = (food) => {
    const initialCart = [...cart];
    const findFoodItem = initialCart.find((item) => item.id === food.id);

    if (findFoodItem === undefined) {
      const addAdditionalInfo = { ...food, quantity: 1, totalPrice: food.price };
      initialCart.push(addAdditionalInfo);
      setCart(initialCart);
      localStorage.setItem("pandorasCart", JSON.stringify(initialCart));
      alert("Item Added to Cart");
    } else {
      alert("Item already in cart");
    }
  };

  useEffect(() => {
    const getFood = async () => {
      try {
        const resp = await fetch("https://adorable-bat-fatigues.cyclic.app/bbqs/" + id);
        const data = await resp.json();
        setFood(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFood();
  }, [id]);

  return (
    <div className="pages">
      {food.id ? (
        <div className="menuDetails">
          <img src={food.img} alt="Food" />
          <h2>{food.name}</h2>
          <p>{food.dsc}</p>
          <p>${food.price}</p>
          <Button btnBg="#343939" title="Add to cart" clickFunc={() => handleAddToCart(food)} />
        </div>
      ) : null}
    </div>
  );
}

export default HouseDetails;
