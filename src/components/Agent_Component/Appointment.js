import React from 'react'
import AppointmentCard from "../Dashboard_Utilities/AppointmentCard";
import DashboardHeader from "../Dashboard_Utilities/DashboardHeader";



const Appointment = () => {
  return (
    <div>
      <DashboardHeader
        header="Appointment"
        text="Hi Aminu, welcome to EsteemHome"
      />

      <div className="grid-container">
          <AppointmentCard
            date="12-Feb-2024"
            title="Discussing Rent Payment"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quidem nihil necessitatibus quas illo quaerat recusandae iste magni. Libero, amet?"
          />

          <AppointmentCard
            date="12-Feb-2024"
            title="Discussing Rent Payment"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quidem nihil necessitatibus quas illo quaerat recusandae iste magni. Libero, amet?"
          />

          <AppointmentCard
            date="12-Feb-2024"
            title="Discussing Rent Payment"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quidem nihil necessitatibus quas illo quaerat recusandae iste magni. Libero, amet?"
          />

          <AppointmentCard
            date="12-Feb-2024"
            title="Discussing Rent Payment"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quidem nihil necessitatibus quas illo quaerat recusandae iste magni. Libero, amet?"
          />
        </div>
    </div>
  )
}

export default Appointment
