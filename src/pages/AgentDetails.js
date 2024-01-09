import Button from "../components/Button";
import { useState } from "react";
function AgentDetails() {
  const [uFname, setUfname] = useState("");
  const [uLname, setUlname] = useState("");
  const [uEmail, setUemail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uGender, setUgender] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [date, setDate] = useState("");
  const [menu, setMenu] = useState("");
  const [uMessage, setUmessage] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const loggedInUser = JSON.parse(sessionStorage.getItem("PandorasUser"));

  const submitForm = async (e) => {
    e.preventDefault();
    if (loggedInUser === null) {
      alert("Please Login to your account to Book a table");
    } else if (uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uGender === "" || numberOfPersons === "" || date === "" || menu === "") {
      setCheckValue(true);
    } else {
      let booking_obj = {
        user_id: loggedInUser.id,
        first_name: uFname,
        last_name: uLname,
        email: uEmail,
        gender: uGender,
        phone: uPhone,
        number_of_Persons: numberOfPersons,
        date: date,
        menu: menu,
        message: uMessage,
        date_of_booking: new Date().toLocaleString(),
      };
      const resp = await fetch("http://localhost:5000/table_bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking_obj),
      });
      if (resp.ok) {
        alert("Table Booked Successfully");
        setUfname("");
        setUlname("");
        setUemail("");
        setUgender("");
        setUphone("");
        setNumberOfPersons("");
        setDate("");
        setMenu("");
        setUmessage("");
      } else {
        alert("There was a probem booking a table");
      }
    }
  };

  return (
    <div className="book_table">
      <div className="book_table_header">
        <h2>Book a Table</h2>
        <p>Make a reservation to dine with us</p>
      </div>
      <form className="form">
        <div className="input-group">
          <div className="form-group">
            <label htmlFor="">First name</label>
            <input type="text" value={uFname} onChange={(e) => setUfname(e.target.value)} />
            {checkValue === true && uFname === "" ? <span>First name Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input type="text" value={uLname} onChange={(e) => setUlname(e.target.value)} />
            {checkValue === true && uLname === "" ? <span>Last name Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={uEmail} onChange={(e) => setUemail(e.target.value)} />
            {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input type="text" value={uPhone} onChange={(e) => setUphone(e.target.value)} />
            {checkValue === true && uPhone === "" ? <span>Phone Number Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <select value={uGender} onChange={(e) => setUgender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {checkValue === true && uGender === "" ? <span>Gender Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Number of Persons</label>
            <select value={numberOfPersons} onChange={(e) => setNumberOfPersons(e.target.value)}>
              <option value="">No. of Persons</option>
              <option value="1 Person">1 Person</option>
              <option value="2 Persons">2 Persons</option>
              <option value="3 Persons">3 Persons</option>
              <option value="5 or more Persons">5 or more Persons</option>
            </select>
            {checkValue === true && numberOfPersons === "" ? <span>Select Number of Persons</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            {checkValue === true && date === "" ? <span>Select Reservation Date</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Menu</label>
            <select value={menu} onChange={(e) => setMenu(e.target.value)}>
              <option value="">Select Menu</option>
              <option value="Breakfast Menu">Breakfast Menu</option>
              <option value="Brunch Menu">Brunch Menu</option>
              <option value="Lunch Menu">Lunch Menu</option>
              <option value="Late Afternoon Menu">Late Afternoon Menu</option>
              <option value="Dinner Menu">Dinner Menu</option>
              <option value="Decide on Arrival">Decide on Arrival</option>
            </select>
            {checkValue === true && menu === "" ? <span>Select Menu</span> : null}
          </div>
        </div>
        <div className="form-group-textarea">
          <label htmlFor="">Message(optional)</label>
          <textarea value={uMessage} onChange={(e) => setUmessage(e.target.value)} placeholder="Allergies, Additional Requests, etc..."></textarea>
        </div>
        <Button title="Submit" btnBg="#6c6c6c" clickFunc={submitForm} />
      </form>
    </div>
  );
}
export default AgentDetails;
