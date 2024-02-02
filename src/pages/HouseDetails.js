import { useNavigate } from "react-router-dom"
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
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function HouseDetails() {
  const navigate = useNavigate()
  const [uDate, setDate] = useState("")
  const [uTime, setUtime] = useState("")
  const [uMessage, setUmessage] = useState("")
  const [checkValue, setCheckValue] = useState(false);
  const [toggle, setToggle] = useState(false)
  const loggedInUser = JSON.parse(sessionStorage.getItem("User"));
  const today = new Date()
  const todayDate = today.getTime()

  const sendBooking = async (e) => {
    e.preventDefault();
    if (loggedInUser === null) {
      alert("Please Login to your account to Book an appointment");
      navigate("/login")
    } else if (uMessage === "" || uTime === "") {
      setCheckValue(true);
    }
    else {
      const userDate = new Date(uDate).getTime()
      // console.log(userDate)

      if (todayDate <= userDate) {
        let post_obj = {
          property_id: loggedInUser.id,
          user_id: loggedInUser.id,
          date: uDate,
          msg: uMessage,
          time: uTime,
        }
        const resp = await fetch("http://property.reworkstaging.name.ng/v1/appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post_obj),
        });
        if (resp.ok) {
          alert("Appointment Created Successfully");
          setDate("");
          setUtime("");
          setUmessage("");
        } else {
          alert("There was a probem creating appointment!");
        }
      } else {
        alert("Appointment Date is past, select a future date")
      };
    }
  };

  return (
    <div className="prop-cont">
      <Navigation/>
      <div className="singlePTxt">
        <h1 className="hd">Properties Single</h1>
        <p className="lux">Luxurious home</p>
      </div>
      <div className="mySlider">
        <Swiper className="swiper"
          modules={[Navigation, Pagination, EffectFade, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={true}
          effect-fade
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="single-p">
            <div className="single_prop_img">
              <div>
                <img src={houseImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-p">
            <div className="single_prop_img">
              <div>
                <img src={houseImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-p">
            <div className="single_prop_img">
              <div>
                <img src={houseImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-p">
            <div className="single_prop_img">
              <div>
                <img src={houseImg} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
                    <label className="form-label">Date:</label>
                    <input className="form-input" type="date" placeholder="Enter Date" value={uDate} onChange={(e) => setDate(e.target.value)} />
                    {checkValue === true && uDate === "" ? <span>Date Required</span> : null}
                  </div>

                  <div className="app-group">
                    <label className="form-label">Appointment Time:</label>
                    <input className="form-input" type="time" placeholder="Enter Appointment Time" value={uTime} onChange={(e) => setUtime(e.target.value)} />
                    {checkValue === true && uTime === "" ? <span>Time Required</span> : null}
                  </div>

                  <div className="app-group">
                    <label className="form-label" htmlFor="message">Message:</label>
                    <textarea className="form-textarea" placeholder="Enter Message" value={uMessage} onChange={(e) => setUmessage(e.target.value)} />
                    {checkValue === true && uMessage === "" ? <span>Message Required</span> : null}
                  </div>
                  <Button classN="form-submit" title="Book Appointment" btnBg="#00AEFF" btnColor="white" border="none" clickFunc={sendBooking}></Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HouseDetails;
