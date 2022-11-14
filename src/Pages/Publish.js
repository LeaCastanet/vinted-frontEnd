import { useState } from "react";
import PublishForm from "../components/PublishForm";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

  return (
    <div>
      <PublishForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        condition={condition}
        setCondition={setCondition}
        city={city}
        setCity={setCity}
        brand={brand}
        setBrand={setBrand}
        size={size}
        setSize={setSize}
        color={color}
        setColor={setColor}
        picture={picture}
        setPicture={setPicture}
        token={token}
      />
    </div>
  );
};

export default Publish;
