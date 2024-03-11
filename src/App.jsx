import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./assets/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </HashRouter>
    </GlobalProvider>
  );
}

export default App;
