import { useState, useContext } from "react";
import Button from "../Button";
import { GlobalContext } from "../../context/context";

export default function PropertyForm() {

  const [propName, setpropName] = useState("");
  const {currentUser} = useContext(GlobalContext)
  const [propPrice, setpropPrice] = useState("");
  const [propLocation, setpropLocation] = useState("");
  const [propSquareArea, setpropSquareArea] = useState("");
  const [propImgMain, setpropImgMain] = useState("");
  const [propImgtwo, setpropImgtwo] = useState("");
  const [propImgthree, setpropImgthree] = useState("");
  const [propImgfour, setpropImgfour] = useState("");
  const [propImgfive, setpropImgfive] = useState("");
  const [propCountry, setpropCountry] = useState("");
  const [propState, setpropState] = useState("");
  const [propCity, setpropCity] = useState("");
  const [propAddress, setpropAddress] = useState("");
  const [propLatitude, setpropLatitude] = useState("");
  const [propLongitude, setpropLongitude] = useState("");
  const [propCategory, setpropCategory] = useState("");
  const [propType, setpropType] = useState("");
  const [propUse, setpropUse] = useState("");
  const [propPaymentPlan, setpropPaymentPlan] = useState("");
  const [propFurnish, setpropFurnish] = useState("");
  const [propBedroom, setpropBedroom] = useState("");
  const [propBathroom, setpropBathroom] = useState("");
  const [propToilet, setpropToilet] = useState("");
  const [propParking, setpropParking] = useState("");
  const [propDescription, setpropDescription] = useState("");
  const [agentName, setagentName] = useState("");
  const [checkValue, setCheckValue] = useState(false);


  const createProperty = async (e) => {
    try {
      e.preventDefault();
      console.log(currentUser?.data?.token)
      
      if (propName === "" || propPrice === "" || propLocation === "" || propSquareArea === "" || propImgMain === "" || propImgtwo === "" || propImgthree === "" || propCountry === "" || propState === "" || propCity === "" || propAddress === "" || propLatitude === "" || propLongitude === "" || propCategory === "" || propType === "" || propUse === "" || propPaymentPlan === "" || propFurnish === "" || propBedroom === "" || propBathroom === "" || propToilet === "" || propParking === "" || propDescription === "" || agentName === "") {
        setCheckValue(true);
      } else {
        let property_obj = {
          name: propName,
          price: propPrice,
          country: propCountry,
          state: propState,
          city: propCity,
          lat: propLatitude,
          lng: propLongitude,
          address: propAddress,
          description: propDescription,
          category: propCategory,
          total_area: "220 sqm",
          property_use: propUse,
          payment_plan: propPaymentPlan,
          type: propType,
          image: propImgMain,
          bedroom: propBedroom,
          bathroom: propBathroom,
          toilet: propToilet,
          parking_space: propParking,
          furnishing: propFurnish,
          disclaimer: propDescription,
          amenities: [
            "BEDROOM",
            "TOILET",
            "GYM"
          ],
          agent: agentName,
        };
        const res = await fetch("http://property.reworkstaging.name.ng/v1/properties", {
          method: "POST",
          headers: {
            "content-type": "application/JSON",
            "Authorization": `Bearer ${currentUser?.data?.token}`
          },
          body: JSON.stringify(property_obj)
        })
        const property = await res.json();
        console.log(property)
        // navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
      <div className="new-property-form">
        <form action="">
          <div className="new-property-form-container">
            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-name">Property Name</label>
              </div>
              <input
                type="text"
                name=""
                id="property-name"
                placeholder="e.g Harry's Apartment"
                value={propName} onChange={(e) => setpropName(e.target.value)} />
              {checkValue === true && propName === "" ? <span>*Property Name Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-price">Property price</label>
              </div>
              <input
                type="text"
                name=""
                id="property-price"
                placeholder="e.g 500,000"
                value={propPrice} onChange={(e) => setpropPrice(e.target.value)} />
              {checkValue === true && propPrice === "" ? <span>*Price Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-location">Property location</label>
              </div>
              <input
                type="text"
                name=""
                id="property-location "
                placeholder="e.g Esteem Estate, Block 2"
                value={propLocation} onChange={(e) => setpropLocation(e.target.value)} />
              {checkValue === true && propLocation === "" ? <span>*Location Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-location">
                  Square Area
                </label>
              </div>
              <input
                type="text"
                name=""
                id="property-google-location"
                placeholder="Property Square Area "
                value={propSquareArea} onChange={(e) => setpropSquareArea(e.target.value)} />
              {checkValue === true && propSquareArea === "" ? <span>*Square Area Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-main-img">
                  Property image (main){" "}
                </label>
              </div>
              <input
                type="file"
                name=""
                id="property-google-main-img"
                value={propImgMain} onChange={(e) => setpropImgMain(e.target.value)} />
              {checkValue === true && propImgMain === "" ? <span>*Image Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-main-img-2">
                  Property image 2{" "}
                </label>
              </div>
              <input
                type="file"
                name=""
                id="property-google-main-img-2"
                value={propImgtwo} onChange={(e) => setpropImgtwo(e.target.value)} />
              {checkValue === true && propImgtwo === "" ? <span>*Image Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-main-img-3">
                  Property image 3{" "}
                </label>
              </div>
              <input
                type="file"
                name=""
                id="property-google-main-img-3"
                value={propImgthree} onChange={(e) => setpropImgthree(e.target.value)} />
              {checkValue === true && propImgthree === "" ? <span>*Image Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-main-img-4">
                  Property image 4{" "}
                </label>
              </div>
              <input
                type="file"
                name=""
                id="property-google-main-img-4"
                value={propImgfour} onChange={(e) => setpropImgfour(e.target.value)} />
              {checkValue === true && propImgfour === "" ? <span>*Image Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-google-main-img-4">
                  Property image 5{" "}
                </label>
              </div>
              <input
                type="file"
                name=""
                id="property-google-main-img-4"
                value={propImgfive} onChange={(e) => setpropImgfive(e.target.value)} />
              {checkValue === true && propImgfive === "" ? <span>*Image Required</span> : null}

            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-country">Country </label>
              </div>
              <input
                type="text"
                name=""
                id="property-country"
                placeholder="Nigeria"
                value={propCountry} onChange={(e) => setpropCountry(e.target.value)} />
              {checkValue === true && propCountry === "" ? <span>*Country Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-country-state">State </label>
              </div>
              <select name="" id="property-country-state" value={propState} onChange={(e) => setpropState(e.target.value)}>
                <option value="" >   Select state</option>
                <option value="Abia"> Abia </option>
                <option value="Adamawa"> Adamawa </option>
                <option value="AkwaIbom"> Akwa Ibom </option>
                <option value="Anambra"> Anambra </option>
                <option value="Bauchi"> Bauchi </option>
                <option value="Bayelsa"> Bayelsa </option>
                <option value="Benue"> Benue </option>
                <option value="Borno"> Borno </option>
                <option value="CrossRiver"> Cross River </option>
                <option value="Delta"> Delta </option>
                <option value="Ebonyi"> Ebonyi </option>
                <option value="Edo"> Edo </option>
                <option value="Ekiti"> Ekiti </option>
                <option value="Rivers"> Rivers </option>
                <option value="Enugu"> Enugu </option>
                <option value="FCT"> FCT </option>
                <option value="Gombe"> Gombe </option>
                <option value="Imo"> Imo </option>
                <option value="Jigawa"> Jigawa </option>
                <option value="Kaduna"> Kaduna </option>
                <option value="Kano"> Kano </option>
                <option value="Katsina"> Katsina </option>
                <option value="Kebbi"> Kebbi </option>
                <option value="Kogi"> Kogi </option>
                <option value="Kwara"> Kwara </option>
                <option value="Lagos"> Lagos </option>
                <option value="Nasarawa"> Nasarawa </option>
                <option value="Niger"> Niger </option>
                <option value="Ogun"> Ogun </option>
                <option value="Ondo"> Ondo </option>
                <option value="Osun"> Osun </option>
                <option value="Oyo"> Oyo </option>
                <option value="Plateau"> Plateau </option>
                <option value="Sokoto"> Sokoto </option>
                <option value="Taraba"> Taraba </option>
                <option value="Yobe"> Yobe </option>
                <option value="Zamfara"> Zamfara </option>
              </select>
              {checkValue === true && propState === "" ? <span>*State Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-lga">City </label>
              </div>
              <input type="text"
                name=""
                id="property-lga"
                placeholder="Abuja"
                value={propCity} onChange={(e) => setpropCity(e.target.value)} />
              {checkValue === true && propCity === "" ? <span>*City Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-adddress">Address </label>
              </div>
              <input
                type="text"
                name=""
                id="property-adddress"
                placeholder="e.g Opp. Achida, Plaze, Old Minna Garage"
                value={propAddress} onChange={(e) => setpropAddress(e.target.value)} />
              {checkValue === true && propAddress === "" ? <span>*Property Address Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-lat">lat </label>
              </div>
              <input
                type="text"
                name=""
                id="property-lat"
                placeholder="e.g 7.27822"
                value={propLatitude} onChange={(e) => setpropLatitude(e.target.value)} />
              {checkValue === true && propLatitude === "" ? <span>*Latitude Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-lng">long </label>
              </div>
              <input
                type="text"
                name=""
                id="property-lng"
                placeholder="e.g 8.27822"
                value={propLongitude} onChange={(e) => setpropLongitude(e.target.value)} />
              {checkValue === true && propLongitude === "" ? <span>*Longitude Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-category">property category </label>
              </div>
              <select name="" id="property-category" value={propCategory} onChange={(e) => setpropCategory(e.target.value)}>
                <option value="" disabled>--Select Category--</option>
                <option value="FLAT"> Flat </option>
                <option value="APPARTMENT"> Appartment </option>
                <option value="LAND"> Land </option>
                <option value="DUPLEX"> Duplex </option>
                <option value="WAREHOUSE"> Warehouse </option>
                <option value="SHOP"> Shop </option>
              </select>
              {checkValue === true && propCategory === "" ? <span>*Category Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-type">property type </label>
              </div>
              <select name="" id="property-type" value={propType} onChange={(e) => setpropType(e.target.value)}>
                <option value="" disabled>--Select Type--</option>
                <option value="RENT"> Rent </option>
                <option value="LEASE"> Lease </option>
                <option value="SALES"> Sales </option>
              </select>
              {checkValue === true && propType === "" ? <span>*Property Type Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-use">property use</label>
              </div>
              <select name="" id="property-use" value={propUse} onChange={(e) => setpropUse(e.target.value)}>
                <option value="" disabled>--Select Use--</option>
                <option value="RESIDENTIAL"> Residential </option>
                <option value="COMMERCIAL"> Commercial </option>
              </select>
              {checkValue === true && propUse === "" ? <span>*Property Use Required</span> : null}
            </div>


            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-payment-plan ">Payment Plan</label>
              </div>
              <select name="" id="property-payment-plan" value={propPaymentPlan} onChange={(e) => setpropPaymentPlan(e.target.value)}>
                <option value="" disabled>--Select Payment Plan--</option>
                <option value="PER_ANNUM"> Annually </option>
                <option value="MONTHLY"> Monthly </option>
                <option value="PER_PLOT"> Per Plot </option>
                <option value="PER_DAY"> Per Day </option>
              </select>
              {checkValue === true && propPaymentPlan === "" ? <span>*Payment Plan Required</span> : null}
            </div>


            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-furnishing">Property Furnishing</label>
              </div>
              <select name="" id="property-furnishing " value={propFurnish} onChange={(e) => setpropFurnish(e.target.value)}>
                <option value="" disabled>--Select Furnishing--</option>
                <option value="FURNISHED"> Furnished </option>
                <option value="UNFURNISHED"> Unfurnished </option>
              </select>
              {checkValue === true && propFurnish === "" ? <span>*Furnishing Required</span> : null}
            </div>


            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-bedroom-numb">Bedroom</label>
              </div>
              <input
                type="number"
                name=""
                id="property-bedroom-numb"
                placeholder="e.g 10"
                value={propBedroom} onChange={(e) => setpropBedroom(e.target.value)} />
              {checkValue === true && propBedroom === "" ? <span>*Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-bathroom">Bathroom </label>
              </div>
              <input
                type="number"
                name=""
                id="property-bathroom"
                placeholder="e.g 10"
                value={propBathroom} onChange={(e) => setpropBathroom(e.target.value)} />
              {checkValue === true && propBathroom === "" ? <span>*Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-toilet-numb">Toilet</label>
              </div>
              <input
                type="number"
                name=""
                id="property-toilet-numb"
                placeholder="e.g 10"
                value={propToilet} onChange={(e) => setpropToilet(e.target.value)} />
              {checkValue === true && propToilet === "" ? <span>*Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-parking-space">Parking Space </label>
              </div>
              <input
                type="number"
                name=""
                id="property-parking-space"
                placeholder="e.g 18"
                value={propParking} onChange={(e) => setpropParking(e.target.value)} />
              {checkValue === true && propParking === "" ? <span>*Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <p> Property Amenities</p>

              <div className="property-amenities">
                <input type="checkbox" name="" id="property-bedroom" />
                <label htmlFor="property-bedroom">Playground</label>
              </div>

              <div className="property-amenities">
                <input type="checkbox" name="" id="property-toilet" />
                <label htmlFor="property-toilet">Pool</label>
              </div>

              <div className="property-amenities">
                <input type="checkbox" name="" id="property-gym" />
                <label htmlFor="property-gym">Gym </label>
              </div>
            </div>


            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-descp">Disclaimer</label>
              </div>
              <textarea
                name=""
                id="property-descp"
                placeholder="Disclaimer"
                cols="3"
                rows="3"
                value={propDescription} onChange={(e) => setpropDescription(e.target.value)}
              ></textarea>
              {checkValue === true && propDescription === "" ? <span>*Description Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
                <label htmlFor="property-agent">Agent name </label>
              </div>
              <input
                type="text"
                name=""
                id="property-agent"
                placeholder="e.g Musa"
                value={agentName} onChange={(e) => setagentName(e.target.value)} />
              {checkValue === true && agentName === "" ? <span>*Agent Name Required</span> : null}
            </div>

            <div className="new-property-form-item">
              <div>
              </div>
              <Button title="Create Property +" btnBg="#140c40" btnColor="white" border="none" clickFunc={createProperty}></Button>
              {/* <input type="button" value="+ Create Property" /> */}
            </div>




          </div>
        </form>
      </div>
    </>
  );
}
