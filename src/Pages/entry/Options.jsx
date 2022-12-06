import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoop" ? ScoopOption : ToppingOption;

  const OptionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  if (error) {
    return <AlertBanner />;
  }

  return <Row>{OptionItems}</Row>;
}
