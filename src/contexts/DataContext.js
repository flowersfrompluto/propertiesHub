import { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [feeds, setFeeds] = useState([]);
  const [cart, setCart] = useState([]);
  const localStorageCart = JSON.parse(localStorage.getItem("pandorasCart"));

  useEffect(() => {
    const getFeeds = async () => {
      const resp = await fetch("http://localhost:5000/feeds");
      if (resp.ok) {
        const data = await resp.json();
        setFeeds(data);
      }
    };
    getFeeds();
    if (localStorageCart !== null) {
      setCart(localStorageCart);
    }
  }, []);

  return <DataContext.Provider value={{ feeds, setFeeds, cart, setCart }}>{children}</DataContext.Provider>;
}

export default DataProvider;
