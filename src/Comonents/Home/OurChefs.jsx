import React from "react";
import Chefs from "./Chefs";
import DisplayChefs from "./DisplayChefs";
import useChefsData from "../ChefsAPI/ChefsAPI";
import { useLoaderData } from "react-router-dom";

const OurChefs = () => {
  // const chefs = useChefsData();
  const chefs = useLoaderData();
  return (
    <div>
      <DisplayChefs chefs={chefs} />
    </div>
  );
};

export default OurChefs;
