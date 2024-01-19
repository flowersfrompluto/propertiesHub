import { Link } from "react-router-dom";
import Button from "../components/Button";
// import { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { RxDimensions } from "react-icons/rx";
import house1 from "../images/home (1).jpg"
import house2 from "../images/home (2).jpg"
import house3 from "../images/home (3).jpg"
import { CiHeart } from "react-icons/ci";

function HousingPage() {
  // const [food, setFood] = useState([]);

  // useEffect(() => {
  //   const getMenu = async () => {
  //     try {
  //       const resp = await fetch("https://adorable-bat-fatigues.cyclic.app/bbqs");
  //       const data = await resp.json();
  //       setFood(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMenu();
  // }, []);

  return (
    <div>
      <div className="housing grid">
        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="/properties/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

        <div className="housingBox">
          <Link to="#">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="housingLine flex">
              <div>
                <h3>$6789</h3>
              </div>
              <div>
                <Button title={<CiHeart />} btnBg="transparent" btnColor="#00AEFF" border="none"></Button>
              </div>
            </div>
            <h2>Apartment</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <div className="propertyBtn">
              <Link to="/properties/details/:id" className="btn">
                View Details
              </Link>
            </div>
          </div>
          <div className="textbox flex">
            <h4 className="flex"> <span>
              <HiHomeModern />
            </span> 2 Living Room</h4>
            <h4 className="flex"> <span>
              <IoBedOutline />
            </span> 6 Bedroom</h4>
            <h4 className="flex"> <span>
              <RxDimensions />
            </span> 1080 Sq Ft</h4>
          </div>
        </div>

      </div>





      {/* <div className="menu_page">
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
      </div> */}
    </div>
  );
}

export default HousingPage;
