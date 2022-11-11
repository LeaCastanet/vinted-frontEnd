import axios from "axios";
import { useState, useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeOffers from "../components/HomeOffers";

const Home = ({ textSearch, priceMin, priceMax, orderBy, setOrderBy }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${textSearch}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${orderBy}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [textSearch, priceMin, priceMax, orderBy]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="container">
      <HomeHeader />
      <HomeOffers data={data} setData={setData} />
    </div>
  );
};

export default Home;
