export default function PropertyForm() {
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
            />
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-price">Property price</label>
            </div>
            <input
              type="text"
              name=""
              id="property-price"
              placeholder="e.g 500000"
            />
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
            />
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-google-location">
                Google Map Location
              </label>
            </div>
            <input
              type="text"
              name=""
              id="property-google-location"
              placeholder="Paste your google map url here"
            />
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
              placeholder="Paste your google map url here"
            />
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
              placeholder="Paste your google map url here"
            />
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
              placeholder="Paste your google map url here"
            />
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
              placeholder="Paste your google map url here"
            />
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
            />
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-country-state">State </label>
            </div>
            <select name="" id="property-country-state">
              <option value="" >   Select state</option>
              <option value="Abia"> Abia </option>
              <option value="Adamawa"> Adamawa </option>
              <option value="AkwaIbom"> AkwaIbom </option>
              <option value="Anambra"> Anambra </option>
              <option value="Bauchi"> Bauchi </option>
              <option value="Bayelsa"> Bayelsa </option>
              <option value="Benue"> Benue </option>
              <option value="Borno"> Borno </option>
              <option value="Cross River"> Cross River </option>
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
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-lga">City </label>
            </div>
            <input type="text" name="" id="property-lga" placeholder="Abuja" />
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
            />
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
            />
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
            />
          </div>

        <div className="new-property-form-item">
            <div>
              <label htmlFor="property-category">property category </label>
            </div>
            <select name="" id="property-category">
              <option value="" disabled>   Select category</option>
              <option value="FLAT"> Flat </option>
              <option value="APPARTMENT"> Appartment </option>
              <option value="LAND"> Land </option>
              <option value="DUPLEX"> Duplex </option>
              <option value="WAREHOUSE"> Warehouse </option>
              <option value="SHOP"> Shop </option>
              </select>
          </div>

        <div className="new-property-form-item">
            <div>
              <label htmlFor="property-type">property type </label>
            </div>
            <select name="" id="property-type">
              <option value="" disabled>   Select type</option>
              <option value="RENT"> Rent </option>
              <option value="LEASE"> Lease </option>
              <option value="SALES"> Sales </option>

              </select>
          </div>

        <div className="new-property-form-item">
            <div>
              <label htmlFor="property-use">property use</label>
            </div>
            <select name="" id="property-use">
              <option value="" disabled>   Select use</option>
              <option value="RESIDENTIAL"> Residential </option>
              <option value="COMMERCIAL"> Commercial </option>

              </select>
          </div>


        <div className="new-property-form-item">
            <div>
              <label htmlFor="property-payment-plan ">Payment Plan</label>
            </div>
            <select name="" id="property-payment-plan">
              <option value="" disabled>   Select payment plan</option>
              <option value="PER_ANNUM"> Annually </option>
              <option value="MONTHLY"> Monthly </option>
              <option value="PER_PLOT"> Per Plot </option>
              <option value="PER_DAY"> Per Day </option>

              </select>
          </div>
          

        <div className="new-property-form-item">
            <div>
              <label htmlFor="property-furnishing"> Property Furnishment </label>
            </div>
            <select name="" id="property-furnishing ">
              <option value="" disabled>   Select furnishment</option>
              <option value="FURNISHED"> Furnished </option>
              <option value="UNFURNISHED"> Unfurnished </option>
              </select>
          </div>
          

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-bedroom-numb">Bedroom </label>
            </div>
            <input
              type="number"
              name=""
              id="property-bedroom-numb"
              placeholder="e.g 10"
            />
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
            />
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-toilet-numb">Toilet </label>
            </div>
            <input
              type="number"
              name=""
              id="property-toilet-numb"
              placeholder="e.g 10"
            />
          </div>

          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-parking-space">parking space </label>
            </div>
            <input
              type="number"
              name=""
              id="property-parking-space"
              placeholder="e.g 18"
            />
          </div>

          <div className="new-property-form-item">
         <p> Property Amenities</p>
            <div className="property-amenities">

            <input type="checkbox" name="" id="property-bedroom" />
              <label htmlFor="property-bedroom" value="BEDROOM">Bedroom</label>
            </div>
            
            <div className="property-amenities">
            <input type="checkbox" name="" id="property-toilet" />
              <label htmlFor="property-toilet">Toilet </label>
            </div>

            <div className="property-amenities">
            <input type="checkbox" name="" id="property-gym" />
              <label htmlFor="property-gym">Gym </label>
            </div>
          </div>


          <div className="new-property-form-item">
            <div>
              <label htmlFor="property-descp">property description </label>
            </div>
            <textarea
              name=""
              id="property-descp"
              placeholder="Property Description"
              cols="30"
              rows="10"
            ></textarea>
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
            />
          </div>

          <div className="new-property-form-item">
            <div>
             
            </div>
            <input type="button" value="+ Create Property" />
          </div>
          



        </div>
</form>
      </div>
    </>
  );
}
