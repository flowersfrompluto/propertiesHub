import React from "react";
import DashboardHeader from "./DashboardHeader";
import { BsTelephone } from "react-icons/bs";
import { RxGlobe } from "react-icons/rx";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { PiToiletDuotone } from "react-icons/pi";
import { BsBorder } from "react-icons/bs";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";


import img from "../../images/property_img1.jpg";
import img1 from "../../images/property_img3.jpg";


const Single_property_page = () => {
  return (
    <div className="single-property-page">
      <DashboardHeader
        header="Single Property Detail"
        text="Creating an amazing property for the world!"
      />

      <div className="single-property-page-container">
        <div className="single-property-main">
          <div className="property-img-section">
            <div className="property-minor-img">
              <div className="minor-card minor-img-1">
                {" "}
                <img src={img} alt="" srcset="" />{" "}
              </div>

              <div className="minor-card minor-img-2">
                {" "}
                <img src={img} alt="" srcset="" />
              </div>

              <div className="minor-card minor-img-3">
                <img src={img} alt="" srcset="" />
              </div>
            </div>

            <div className="property-main-img">
              <img src={img1} alt="" srcset="" />
            </div>
          </div>

          <div className="property-header flex">
            <h3>₦ 250,000/yr</h3>
            <div className="property-price">
              <h4 className="appartment-name">Musa's Apartment</h4>
              <p className="location"> Maitama, FCT </p>
            </div>
          </div>

          <div className="property_facilities">
            <div className="property_facility_container">

                <div className="facility_card">
                    <p>Area</p>
                    <BsBorder/> 325 sqKm
                </div>

                <div className="facility_card">
                    <p>Parking space</p>
                    <BiSolidCarGarage/> 3 sqKm
                </div>

                <div className="facility_card">
                    <p>Bedroom</p>
                    <MdOutlineBedroomParent/> 3
                </div>

                <div className="facility_card">
                <p>Bathroom</p>
                    <FaBath/> 5
                </div>

                <div className="facility_card">
                <p>Toilet</p>
                    <PiToiletDuotone/> 5
                </div>

                <div className="facility_card">
                <p>Payment</p>
                    <FaRegCreditCard/> Annually
                </div>

                <div className="facility_card">
                <p>Category</p>
                    <TbCategory/> Flat
                </div>

                <div className="facility_card">
                <p>Furnishing</p>
                    <PiPaintBrushHouseholdFill/> Furnished
                </div>

            </div>
          </div>
        </div>





        <div className="single-property-aside">
          <div className="tenant-info">
            <h5 className="tenant-bio-header">Tenant Bio </h5>

            <div className="tenant-name">
              <h5>Aminu Musa</h5>
              <p><RxGlobe /> Abuja</p>
              <p> <BsTelephone /> +2348091575226</p>
              <p> <strong>About Tenant</strong></p>
              <p>I'm a father of two beautiful girls Asiya and Rahmatu</p>

            <div className="tenant-email">
            <MdOutlineMailOutline size={20}/> <p>aminumusa669@gmail.com</p>
            </div>
            </div>
          </div>
        <div className="google-map">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=16gauFHdLqeIpflm92fp8916pz1_Z8O4&ehbc=2E312F" ></iframe>
        </div>

        </div>


      </div>
    </div>
  );
};

export default Single_property_page;
