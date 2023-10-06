import React from "react";
import { useNavigate } from "react-router-dom";
import "./chefs.css";
const Chefs = ({ chef }) => {
  const navigate = useNavigate();
  console.log(chef, "from chef compo");
  const { chefPhotoUrl, chefName, yearsExperience, likes, numRecipes, id } =
    chef;
  const handleNavigate = () => {
    navigate(`/chefdetails/${id}`);
  };

  console.log(chefPhotoUrl);
  return (
    <div id="chefsCard" className="border-2 flex flex-col rounded-lg p-2">
      <div
        className="w-full px-5"
        style={{
          background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        }}
      >
        <img className="h-80 mx-auto" src={chefPhotoUrl} alt={chefName} />
      </div>
      <div className="bottom mt-auto p-3">
        <h3>{chefName}</h3>
        <p>Experience: {yearsExperience}</p>
        <p>Number of recipes: {numRecipes}</p>
        <div className="flex justify-around gap-3">
          <p>Likes: {likes}</p>
          <button
            className="p-1 bg-yellow-500 rounded-lg"
            onClick={handleNavigate}
          >
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
