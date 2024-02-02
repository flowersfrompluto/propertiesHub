import React from "react";
import DashboardHeader from "../Dashboard_Utilities/DashboardHeader";
import SummaryCard from "../Dashboard_Utilities/SummaryCard";
import MinorHeader from "../Dashboard_Utilities/MinorHeader";
import AppointmentCard from "../Dashboard_Utilities/AppointmentCard";


const AgentDashboardPage = () => {
  return (
    <div>
      <DashboardHeader
        header="Machant Dashboard"
        text="Hi Aminu, welcome to EsteemHome"
      />

      <div className="grid-container">
        <SummaryCard
          figure="95"
          title="properties"
          text="only verified properties"
          bgvalue="95"
        />

        <SummaryCard
          figure="12"
          title="agent"
          text="only verified agent"
          bgvalue="12"
        />

        <SummaryCard
          figure="10"
          title="tenant"
          text="independent families"
          bgvalue="10"
        />

        <SummaryCard
          figure="5,000,000"
          title="total payment"
          text="from all verified properties"
          bgvalue="55"
        />
      </div>

      <div className="recent_appointment">
        <MinorHeader
          title="Recent Appointment"
          btn="View app"
          seperator={false}
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

        <MinorHeader
          title="Recent Properties"
          btn=" View all Properties"
          seperator={true}
        />
      </div>
    </div>
  );
};

export default AgentDashboardPage;
