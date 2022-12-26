import axios from "axios";
import { useState, useEffect } from "react";

import HomeHeader from "../components/HomeHeader";
import HomeOffers from "../components/HomeOffers";

const Home = ({
  textSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  orderBy,
  setOrderBy,
  token,
  page,
  setPage,
  handleToken,
}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${textSearch}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${orderBy}&page=${page}&limit=12`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [textSearch, priceMin, priceMax, orderBy, page]);

  return isLoading ? (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="container">
      <HomeHeader token={token} />
      <HomeOffers
        data={data}
        setData={setData}
        page={page}
        setPage={setPage}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </div>
  );
};

export default Home;
