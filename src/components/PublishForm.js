import axios from "axios";
import { Link } from "react-router-dom";

const PublishForm = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  condition,
  setCondition,
  city,
  setCity,
  brand,
  setBrand,
  size,
  setSize,
  color,
  setColor,
  picture,
  setPicture,
  token,
}) => {
  const handleAjouter = async (event) => {
    event.preventDefault();
    try {
      const params = new FormData();
      params.append("title", title);
      params.append("description", description);
      params.append("price", price);
      params.append("condition", condition);
      params.append("city", city);
      params.append("brand", brand);
      params.append("size", size);
      params.append("color", color);
      params.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        params,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publishFormBody">
      <form onSubmit={handleAjouter} className="publishFormContainer">
        <div className="publishImg">
          <label for="file" className="labelFile">
            Choisir une image
          </label>
          <input
            id="file"
            className="buttonAjoutImg"
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          ></input>
        </div>
        <div className="blockPublishArticle">
          <div className="publishDescription">
            <p>Titre</p>
            <input
              className="publishInput"
              type="text"
              value={title}
              placeholder="ex: Robe Zara verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescription">
            <p>Décris ton article</p>
            <input
              className="publishInputDescription"
              type="text"
              value={description}
              placeholder="ex: En bon état, taille grand"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescription">
            <p>Marque</p>
            <input
              className="publishInput"
              type="text"
              value={brand}
              placeholder="ex: Mango"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescription">
            <p>Taille</p>
            <input
              className="publishInput"
              type="text"
              value={size}
              placeholder="ex: 38"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescription">
            <p>Couleur</p>
            <input
              className="publishInput"
              type="text"
              value={color}
              placeholder="ex: Rose"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescription">
            <p>Etat</p>
            <select
              className="publishInput"
              value={condition}
              placeholder="ex: Neuf avec étiquette"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            >
              <option>Neuf avec étiquette</option>
              <option>Neuf sans étiquette</option>
              <option>Très bon état</option>
              <option>Bon état</option>
              <option>Satisfaisant</option>
            </select>
          </div>
          <div className="publishDescription">
            <p>Lieu</p>
            <input
              className="publishInput"
              type="text"
              value={city}
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            ></input>
          </div>
          <div className="publishDescriptionPrix">
            <p>Prix</p>
            <input
              className="publishInput"
              type="text"
              value={price}
              placeholder="0,00 €"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <button className="buttonAjouter" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default PublishForm;
