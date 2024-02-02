import React from "react";
import DashboardHeader from "../Dashboard_Utilities/DashboardHeader";
import TenantTableList from "../Dashboard_Utilities/TenantTableList";

const Tenant = () => {
  return (
    <div>
      <DashboardHeader
        header="Tenants List"
        btn="+ Add Tenant"
        link={true}
        path="/admin-agent/create-property-admin"
      />
      <TenantTableList/>
    </div>
  );
};

export default Tenant;
