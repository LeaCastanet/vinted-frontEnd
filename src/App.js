import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
import Header from "./components/Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Publish from "./Pages/Publish";
import Payment from "./Pages/Payment";

const App = () => {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Je je trouve un cookie token, ce cookie
  // - Sinon, nulll
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [textSearch, setTextSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [orderBy, setOrderBy] = useState("price-asc");
  const [page, setPage] = useState(1);

  // je stoke le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies.
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              textSearch={textSearch}
              setTextSearch={setTextSearch}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              token={token}
              page={page}
              setPage={setPage}
            />
          }
        ></Route>
        <Route path="/offer/:id" element={<Offer token={token} />}></Route>
        <Route
          path="/signup"
          element={
            <Signup
              token={token}
              setToken={setToken}
              handleToken={handleToken}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              handleToken={handleToken}
            />
          }
        ></Route>
        <Route path="/publish" element={<Publish token={token} />}></Route>
        <Route path="/payment" element={<Payment token={token} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
