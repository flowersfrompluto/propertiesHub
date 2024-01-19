// import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { DataContext } from "../contexts/DataContext";
import Button from "../components/Button"
import profile1 from "../images/img 3.jpg"
import profile2 from "../images/img 2.jpg"
import profile3 from "../images/img 1.jpg"
import houseImg from "../images/singleProp.jpg"
import agent from "../images/Ag.jpg";
import { VscVerifiedFilled, } from "react-icons/vsc";
import { RiMailSendLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState } from "react"



function HouseDetails() {
  // const [food, setFood] = useState({});
  // const { setCart, cart } = useContext(DataContext);
  // const { id } = useParams();

  // const handleAddToCart = (food) => {
  //   const initialCart = [...cart];
  //   const findFoodItem = initialCart.find((item) => item.id === food.id);

  //   if (findFoodItem === undefined) {
  //     const addAdditionalInfo = { ...food, quantity: 1, totalPrice: food.price };
  //     initialCart.push(addAdditionalInfo);
  //     setCart(initialCart);
  //     localStorage.setItem("pandorasCart", JSON.stringify(initialCart));
  //     alert("Item Added to Cart");
  //   } else {
  //     alert("Item already in cart");
  //   }
  // };

  // useEffect(() => {
  //   const getFood = async () => {
  //     try {
  //       const resp = await fetch("https://adorable-bat-fatigues.cyclic.app/bbqs/" + id);
  //       const data = await resp.json();
  //       setFood(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getFood();
  // }, [id]);

  const [date, setDate] = useState("")
  const [fullName, setFullName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [checkValue, setCheckValue] = useState(false);
  const [toggle, setToggle] = useState(false)
  const loggedInUser = JSON.parse(sessionStorage.getItem("User"));


  const sendBooking = async (e) => {
    e.preventDefault();
    if (loggedInUser === null) {
      alert("Please Login to your account to Book an appointment");
    } else if (date === "" || fullName === "" || subject === "" || message === "") {
      alert("All Field Required");
    }
    // else {
    //   let post_obj = {
    //     user_id: loggedInUser.id,
    //     username: loggedInUser.first_name + " " + loggedInUser.last_name,
    //     title: title,
    //     description: descrp,
    //     img: imgUrl,
    //     likes: 0,
    //     dislikes: 0,
    //     comments: [],
    //     date_created: new Date().toLocaleString(),
    //   };
    //   const resp = await fetch("http://localhost:5000/feeds", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(post_obj),
    //   });
    //   if (resp.ok) {
    //     alert("Post Created Successfully");
    //     setTitle("");
    //     setDescrp("");
    //     setImgUrl("");
    //     const data = await resp.json();
    //     props.setFeeds((prev) => [...prev, data]);
    //   } else {
    //     alert("There was a probem creating post");
    //   }
    // }
  };

  return (
    <div className="prop-cont">
      <div className="singlePTxt">
        <h1 className="hd">Properties Single</h1>
        <p className="lux">Luxurious home</p>
      </div>
      <div className="single-p flex">
        <div className="singlePthumbnail flex">
          <div>
            <img src={houseImg} alt="" />
          </div>
          <div>
            <img src={houseImg} alt="" />
          </div>
          <div>
            <img src={houseImg} alt="" />
          </div>
          <div>
            <img src={houseImg} alt="" />
          </div>
          <div>
            <img src={houseImg} alt="" />
          </div>
        </div>

        <div className="singlePMain">
          <img src={houseImg} alt="" />
        </div>
      </div>
      <div class="text-center">
        <span className="subheading">Oakland</span>
        <h2 className="scond-txt">The Blue Sky Home</h2>
      </div>

      <div className="propField flex">
        <div className="propLeft">
          <div className="propDetails">
            <p className="feat">Features</p>
            <hr className="hr" />
            <div className="fealst">
              <ul className="sub">
                <li> Lot Area: 1,250 SQ FT 2</li>
                <li> Bed Rooms: 4</li>
                <li> Bath Rooms: 4</li>
                <li> Luggage</li>
                <li> Garage: 2</li>
              </ul>
              <ul className="">
                <li> Floor Area: 1,300 SQ FT</li>
                <li>Year Build: 2019</li>
                <li> Water</li>
                <li> Stories: 2</li>
                <li> Roofing: New</li>
              </ul>
              <ul>
                <li> Floor Area: 1,300 SQ FT</li>
                <li> Year Build: 2019</li>
                <li> Water</li>
                <li> Stories: 2</li>
                <li> Roofing: New</li>
              </ul>
            </div>
          </div>

          <div className="propDetails">
            <p className="featty"> Description</p>
            <hr className="hrd" />
            <p className="lorem">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
          </div>

          <div className="propDetails">
            <div className="revw">
              <p className="feattty">Reviews</p>
              <hr className="hrrd" />
            </div>
            <div>
              <div className="profone">
                <div>
                  <img src={profile1} alt="" />
                </div>
                <div>
                  <div className="nme-dte">
                    <p>Greg Taffi</p>
                    <p>15 jan 2024</p>
                  </div>
                  <p className="comnt">When she reached the first hills
                    of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div>
              <div className="profone">
                <div>
                  <img src={profile2} alt="" />
                </div>
                <div>
                  <div className="nme-dte">
                    <p>Maria Matt</p>
                    <p>25 Dec 2023</p>
                  </div>
                  <p className="comnt">When she reached the first hills
                    of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div>
              <div className="profone">
                <div>
                  <img src={profile3} alt="" />
                </div>
                <div>
                  <div className="nme-dte">
                    <p>Andrew ivankov</p>
                    <p>18 Nov 2023</p>
                  </div>
                  <p className="comnt">When she reached the first hills
                    of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                </div>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="propRight">
          <div className="wsh-con">
            <div className="acc">
              <div className="price flex">
                <p>Price:</p>
                <h2>$120,000.00</h2>
              </div>
              <button className="calbak">Request a call back</button>
              <div className="bcc">
                <div className="agnt-pro">
                  <img src={agent} alt="" />
                </div>
                <div className="ciros">
                  <p>
                    <Link>Ciros homes & properties</Link>
                  </p>
                  <div className="ag-vfied">
                    <div className="flex">
                      <div>
                        <p><VscVerifiedFilled /></p>
                      </div>
                      <div>
                        <p>Verified ID</p>
                      </div>
                    </div>
                  </div>
                  <p className="mail"><RiMailSendLine /> Typically replies within a day</p>
                  <p className="p-persn"><CgProfile /> 1y 4m on Property Hub</p>
                </div>
                <div>
                  <button className="show"><IoCallOutline />Show Contact</button>
                  <button className="spke" onClick={() => setToggle(!toggle)} ><MdOutlineAttachEmail />Book an appointment</button>
                </div>
              </div>
            </div>
            {toggle && (
              <div className="form-container">
                <form className="appointmentForm" >
                  <div className="app-group">
                    <label className="form-label" htmlFor="date">Date:</label>
                    <input className="form-input" type="date" name="date" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    {checkValue === true && date === "" ? <span>Date Required</span> : null}
                  </div>
                  <div className="app-group">
                    <label className="form-label" htmlFor="fullName">Full Name:</label>
                    <input className="form-input" type="text" name="fullName" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    {checkValue === true && fullName === "" ? <span>Full Name Required</span> : null}
                  </div>
                  <div className="app-group">
                    <label className="form-label" htmlFor="subject">Subject:</label>
                    <input className="form-input" type="text" name="subject" placeholder="Enter Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    {checkValue === true && subject === "" ? <span>Subject Required</span> : null}
                  </div>
                  <div className="app-group">
                    <label className="form-label" htmlFor="message">Message:</label>
                    <textarea className="form-textarea" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    {checkValue === true && message === "" ? <span>Message Required</span> : null}
                  </div>
                  <Button classN="form-submit" title="Book Appointment" btnBg="#00AEFF" btnColor="white" border="none" clickFunc={sendBooking}></Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8069790.435797271!2d8.677456999999999!3d9.0338725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1705590766781!5m2!1sen!2sng" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default HouseDetails;
