import Button from "../components/Button";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { RxDimensions } from "react-icons/rx";
import house1 from "../images/home (1).jpg"
import house2 from "../images/home (2).jpg"
import house3 from "../images/home (3).jpg"
import { CiHeart } from "react-icons/ci";


function Agents() {
  
  return (
    <div>
      <div className="agent grid">
        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house1} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="/agent/details/:id">
            <img src={house2} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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

        <div className="agentBox">
          <Link to="#">
            <img src={house3} alt="samplePhoto" />
          </Link>
          <div>
            <div className="agentLine flex">
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
              <Link to="/agent/details/:id" className="btn">
                View Agent
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
    </div>
  );
}
export default Agents;
