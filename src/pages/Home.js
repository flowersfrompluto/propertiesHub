import Button from "../components/Button";
import house1 from "../images/home (1).jpg"
import house2 from "../images/home (2).jpg"
import house3 from "../images/home (3).jpg"
import house4 from "../images/home (4).jpg"
import house5 from "../images/home (5).jpg"
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiHomeModern, HiOutlineHomeModern, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RxDimensions } from "react-icons/rx";



function Home() {

  return (
    <div>
      <div className="banner">
        <div class="bannerTxt">
          <h1>Unlock the Door to Your Dream Home: Discover the Ultimate <span>Real Estate</span> Experience</h1>
          <h4>From cozy blocks of flat to luxurious estates, we're here to make your real estate dreams come true</h4>
        </div>
      </div>

      <div className="homeRow1 flex">
        <div className="row1txt">
          <h2>Featured Properties</h2>
          <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        </div>
        <div className="featured grid">
          <div className="featuredBox">
            <img src={house1} alt="samplePhoto" />
            <div>
              <h3>$6789</h3>
              <h2>Apartment</h2>
              <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
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
          <div className="featuredBox">
            <img src={house2} alt="samplePhoto" />
            <div>
              <h3>$6789</h3>
              <h2>Apartment</h2>
              <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
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
          <div className="featuredBox">
            <img src={house3} alt="samplePhoto" />
            <div>
              <h3>$6789</h3>
              <h2>Apartment</h2>
              <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
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
          {/* <div className="featuredBox">
            <img src={house4} alt="samplePhoto" />
            <div>
              <h3>$6789</h3>
              <h2>Apartment</h2>
              <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
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
          <div className="featuredBox">
            <img src={house5} alt="samplePhoto" />
            <div>
              <h3>$6789</h3>
              <h2>Apartment</h2>
              <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
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
          </div> */}
        </div>
      </div>

      <div className="homeRow2">
        <h1>How We Help People</h1>
        <div className="homeRow2box flex">
          <div className="homeRow2text">
            <h1><HiOutlineHomeModern /></h1>
            <h2>Homes</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
          </div>
          <div className="homeRow2text">
            <h1><HiOutlineOfficeBuilding /></h1>
            <h2>Offices</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
          </div>
          <div className="homeRow2text">
            <h1><HiOutlineBuildingOffice2 /></h1>
            <h2>Apartments</h2>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
