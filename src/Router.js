import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AgentLayout from "./Layout/AgentLayout";
import AgentDashboardPage from "./components/Agent_Component/AgentDashboardPage";
import Properties from "./components/Agent_Component/Properties";
import Tenant from "./components/Agent_Component/Tenant";
import Appointment from "./components/Agent_Component/Appointment";
import AgentsList from "./components/Agent_Component/AgentsList";
import PropertyReview from "./components/Dashboard_Utilities/PropertyReview";
import Wishlist from "./components/Dashboard_Utilities/Wishlist";
import CreateProperty from "./components/Dashboard_Utilities/CreateProperty";
import UpdateProperty from "./components/Dashboard_Utilities/UpdateProperty";
import Single_property_page from "./components/Dashboard_Utilities/Single_property_page";

// HARRY'S COMPONENT
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HousingPage from "./pages/HousingPage";
import HouseDetails from "./pages/HouseDetails";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Blog from "./pages/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserSignup from "./components/UserSignup";
import AgentSignup from "./components/AgentSignup";
import MerchantSignup from "./components/MerchantSignup";
import Account from "./pages/Account";

// export default function Router() {
// const BrowserRouter = createBrowserRouter([
//   {
//     index: true,
//     element: <h1>Home Page</h1>,
//   },
//   {
//     path: "admin-agent",
//     element: <AgentLayout />,
//     children: [
//       {
//         path: "dashboard",
//         element: <AgentDashboardPage />,
//       },
//       {
//         path: "agentproperty",
//         element: <Properties />,
//       },
//       {
//         path: "agent-tenant",
//         element: <Tenant />,
//       },
//       {
//         path: "agent-appointment",
//         element: <Appointment />,
//       },
//       {
//         path: "agent-list",
//         element: <AgentsList />,
//       },
//       {
//         path: "property-review",
//         element: <PropertyReview />,
//       },
//       {
//         path: "wish-list-admin",
//         element: <Wishlist />,
//       },
//       {
//         path: "create-property-admin",
//         element: <CreateProperty />,
//       },
//       {
//         path: "update-property-admin",
//         element: <UpdateProperty />,
//       },
//       {
//         path: "single-property-admin",
//         element: <Single_property_page />,
//       },
//     ],
//   },
// ]);

export default function Router() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<HousingPage />} />
        <Route path="/properties/details/:id" element={<HouseDetails />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/details/:id" element={<AgentDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Signup />}>
          <Route path="/signup" element={<Navigate replace to="useraccount" />}/>
          <Route path="useraccount" element={<UserSignup />} />
          <Route path="agentaccount" element={<AgentSignup />} />
          <Route path="admin" element={<MerchantSignup />} />
        </Route>
        
          <Route path="admin-agent" element={<AgentLayout />}>
          <Route  path="/admin-agent" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<AgentDashboardPage />} />
          <Route path="agentproperty" element={<Properties />} />
          <Route path="agent-tenant" element={<Tenant />} />
          <Route path="agent-appointment" element={<Appointment />} />
          <Route path="agent-list" element={<AgentsList />} />
          <Route path="property-review" element={<PropertyReview />} />
          <Route path="wish-list-admin" element={<Wishlist />} />
          <Route path="create-property-admin" element={<CreateProperty />} />
          <Route path="update-property-admin" element={<UpdateProperty />} />
          <Route  path="single-property-admin" element={<Single_property_page />}    />
        </Route>
        <Route path="*" element={<h1>Sorry page not found</h1>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

//   return <RouterProvider router={BrowserRouter} />;
// }

// const Router = ()=>{
// return(
//   <BrowserRouter>
//   <Routes>

//     <Route path="admin-agent" element={<AgentLayout />}>
//     <Route path="/" element={<Navigate replace to ="/dashboard" />}/>
//     <Route path="dashboard" element={<AgentDashboardPage />}/>
//     <Route path="agentproperty" element={<Properties />}/>
//     <Route path="agent-tenant" element={<Tenant />}/>
//     <Route path="agent-appointment" element={<Appointment />}/>
//     <Route path="agent-list" element={<AgentsList  />}/>
//     <Route path="property-review" element={<PropertyReview />}/>
//     <Route path="wish-list-admin" element={<Wishlist/>}/>
//     <Route path="create-property-admin" element={<CreateProperty/>}/>
//     <Route path="update-property-admin" element={<UpdateProperty/>}/>
//     <Route path="single-property-admin" element={<Single_property_page />}/>

//     </Route>
//   </Routes>
// </BrowserRouter>;
// )
// }

// {
//   path: "admin-agent",
//   element: <AgentLayout />,
//   children: [
// {
//   path: "dashboard",
//   element: <AgentDashboardPage />,
// },
// {
//   path: "agentproperty",
//   element: <Properties />,
// },
// {
//   path: "agent-tenant",
//   element: <Tenant />,
// },
// {
//   path: "agent-appointment",
//   element: <Appointment />,
// },
// {
//   path: "agent-list",
//   element: <AgentsList />,
// },
// {
//   path: "property-review",
//   element: <PropertyReview />,
// },
// {
//   path: "wish-list-admin",
//   element: <Wishlist />,
// },
// {
//   path: "create-property-admin",
//   element: <CreateProperty />,
// },
// {
//   path: "update-property-admin",
//   element: <UpdateProperty />,
// },
//     {
//       path: "single-property-admin",
//       element: <Single_property_page />,
//     },
//   ],
// },
