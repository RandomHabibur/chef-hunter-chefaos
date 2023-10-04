import React from "react";
import Chefs from "./Chefs";

const DisplayChefs = ({ chefs }) => {
  console.log("displayChefs", chefs);
  return (
    <div>
      <div>
        <h1>Our Top Chefs</h1>
        <p>
          Meet the culinary masterminds behind our delicious dishes. Our top
          chefs bring a wealth of experience and creativity to the kitchen,
          ensuring every meal is a memorable culinary experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 border-2 border-rose-600">
        {chefs.map((chef) => (
          <Chefs chef={chef} key={chef.id} />
        ))}
      </div>
    </div>
  );
};

export default DisplayChefs;
