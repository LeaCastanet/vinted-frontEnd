const AffinerRecherche = ({
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  orderBy,
  setOrderBy,
}) => {
  return (
    <div className="AffinerRecherche">
      <input
        className="inputHeaderPriceMin"
        type="text"
        placeholder="prix min"
        value={priceMin}
        onChange={(event) => {
          setPriceMin(event.target.value);
        }}
      ></input>

      <input
        className="inputHeaderPriceMax"
        type="text"
        placeholder="prix max"
        value={priceMax}
        onChange={(event) => {
          setPriceMax(event.target.value);
        }}
      ></input>
      <button
        className={orderBy === "price-asc" ? "activited" : "unactivited"}
        onClick={(event) => {
          setOrderBy("price-asc");
        }}
      >
        Trier par prix croissant
      </button>

      <button
        className={orderBy === "price-desc" ? "activited" : "unactivited"}
        onClick={(event) => {
          setOrderBy("price-desc");
        }}
      >
        Trier par prix décroissant
      </button>
    </div>
  );
};

export default AffinerRecherche;
