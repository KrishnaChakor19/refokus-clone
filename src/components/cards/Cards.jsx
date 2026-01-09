import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto py-16 flex gap-2">
        <Card width={"basis-1/3"} start={false} para={true} hover={"false"} header={ "Up Next: News"} title={ "Insights and behind the scenes" } />
        <Card width={"basis-2/3"} start={true} para={false} hover={"true"} header={"Get In Touch"} title={"Let's get to it, together. "} />
      </div>
    </div>
  );
};

export default Cards;
