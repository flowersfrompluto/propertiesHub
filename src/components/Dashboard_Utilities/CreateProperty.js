import React from "react";
import DashboardHeader from "./DashboardHeader";
import PropertyForm from "./PropertyForm";

const CreateProperty = () => {
  return (
    <div className="create-property">
      <DashboardHeader
        header="Create Property"
        text="Creating an amazing property for the world!"
      />
      <h1>Completely fill the form below!</h1>

      <PropertyForm />
    </div>
  );
};

export default CreateProperty;
