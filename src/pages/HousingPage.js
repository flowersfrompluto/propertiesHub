import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function HousingPage() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const resp = await fetch("https://adorable-bat-fatigues.cyclic.app/bbqs");
        const data = await resp.json();
        setFood(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMenu();
  }, []);

  return (
    <div className="menu_page">
      <div className="menu_banner">
        <h2>Our Menu</h2>
      </div>
      <div className="menu_grid">
        {food.length !== 0 ? (
          food.map((food_item) => (
            <div className="menu_content" key={food_item.id}>
              <img src={food_item.img} alt="Food" />
              <h3>{food_item.name}</h3>
              <span>${food_item.price}</span>
              <p>{food_item.dsc}</p>
              <div className="menu-btns">
                <Link to={"/menu/details/" + food_item.id} className="menu_content_btn">
                  View Details
                </Link>
                <Button title="Delete" btnBg="red" />
              </div>
            </div>
          ))
        ) : (
          <h2>No Food To display</h2>
        )}
      </div>
    </div>
  );
}

export default HousingPage;
