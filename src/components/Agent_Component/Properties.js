import React from "react";
import DashboardHeader from "../Dashboard_Utilities/DashboardHeader";
import { Outlet } from "react-router-dom";
import PropertyTable from "../Dashboard_Utilities/PropertyTable";

const Properties = () => {
  return (
    <div>
      <DashboardHeader 
      header='Property List'
      btn="+ Add Property" 
      link={true}
      path="/admin-agent/create-property-admin"
      />

      <PropertyTable/>
    </div>
  );
};

export default Properties;
