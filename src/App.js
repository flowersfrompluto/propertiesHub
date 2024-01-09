import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HousingPage from "./pages/HousingPage";
import HouseDetails from "./pages/HouseDetails";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import DataProvider from "./contexts/DataContext";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<HousingPage />} />
          <Route path="/properties/details/:id" element={<HouseDetails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/details/:id" element={<AgentDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;