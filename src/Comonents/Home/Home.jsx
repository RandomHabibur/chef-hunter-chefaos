import React from "react";
import ImageGallery from "./ImageGallery";

const Home = () => {
  return (
    <div className="my-12 mx-auto">
      <div
        id="baseSection"
        className="basesection flex flex-col items-center md:flex-col lg:flex-row gap-16"
      >
        <div style={{ minWidth: "400px" }} className="lg:ml-48">
          <h1 className="text-4xl font-semibold">Private Chef in Dhaka</h1>
          <p className="my-4 text-lg">
            Hire one of our 13 Private Chefs in Dhaka and personalize your menu,
            300 clients in Dhaka have already booked their chef!
          </p>
          <button className="text-lg px-14 py-3 rounded-full bg-yellow-400">
            Start
          </button>
        </div>
        <div>
          {/* credit >> https://www.youtube.com/@nastydeveloper5260/videos */}
          <ImageGallery />
        </div>
      </div>
      <section>
        {/* 
        [
    {
        "id": "P9Q8R7S6T5U4V3W2",
        "chef_id": "2",
        "chefName": "Anthony Bourdain",
        "chefPhotoUrl": "https://i.ibb.co/N94dnS5/team-2.png",
        "likes": 1000,
        "numRecipes": 15,
        "yearsExperience": 8,
        "chefDescription": "Anthony Bourdain was an American chef, author, and television host.The Entity Behaviors Drupal modules allows designs to attach behaviors to the HTML representing an Entity. He was known for his adventurous spirit and love of exploring different cultures and cuisines around the world. Bourdain started his career as a chef in New York City, but later became a food writer and host of several popular TV shows, including 'No Reservations' and 'Parts Unknown.' He was an advocate for using local, sustainable ingredients and for respecting the cultures of the places he visited. Bourdain was also a prolific author, writing several best-selling books about his travels and experiences. He passed away in 2018, but his impact on the culinary world and his passionate advocacy for food and culture continue to inspire chefs and food lovers everywhere.",
        "recipes": [
            {
                "name": "Chocolate Cake",
                "ingredients": "flour, sugar, cocoa powder, baking powder ,eggs, milk",
                "cookingMethod": "1. Preheat oven to 350°F. 2. In a large bowl, combine flour, sugar, cocoa powder, and baking powder. 3. In a separate bowl, beat eggs and milk together. 4. Add wet ingredients to dry ingredients and mix until combined. 5. Pour batter into greased cake pan. 6. Bake for 30-35 minutes. 7. Let cool and frost as desired.",
                "rating": 4.9,
                "recipeImages": "https://i.ibb.co/G9TSH5H/Chocolate-Cake-3.jpg"
            },
            {
                "name": "Strawberry Cheesecake",
                "ingredients": "graham cracker crumbs, cream cheese ,sugar, eggs, strawberries",
                "cookingMethod": "1. Preheat oven to 325°F. 2. In a large bowl, mix graham cracker crumbs and melted butter. 3. Press mixture into bottom of springform pan. 4. In a separate bowl, beat cream cheese and sugar together. 5. Add eggs one at a time, beating well after each addition. 6. Pour mixture into pan. 7. Bake for 45-50 minutes. 8. Let cool and top with fresh strawberries.",
                "rating": 4.7,
                "recipeImages": "https://i.ibb.co/3C5b3m9/Chocolate-Cake-2.jpg"
            },
            {
                "name": "Blueberry Muffins",
                "ingredients": "flour, sugar, baking powder, salt, egg, milk ,butter, blueberries",
                "cookingMethod": "1. Preheat oven to 400°F. 2. In a large bowl, mix flour, sugar, baking powder, and salt. 3. In a separate bowl, beat egg, milk, and melted butter together. 4. Add wet ingredients to dry ingredients and mix until combined. 5. Fold in blueberries. 6. Pour batter into greased muffin cups. 7. Bake for 18-20 minutes. Let cool and serve.",
                "rating": 4.6,
                "recipeImages": "https://i.ibb.co/tMwqj0D/Chocolate-Cake-1.jpg"
            }
        ]
    }
]
        */}
      </section>
    </div>
  );
};

export default Home;
