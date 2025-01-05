import React from "react";
import Card from "../components/Card";
import { cardsContent } from "../lib/card-data";

const CardContainer = () => {
  return (
    <section className="space-y-[200px] px-5">
      {cardsContent.map((card) => (
        <Card data={card} />
      ))}
    </section>
  );
};

export default CardContainer;
