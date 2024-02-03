import "./App.css";
import "./Admin.css";
import "./mediaQuerry.css";
import Router from "./Router";
import GlobalProvider from "./context/context";




function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;