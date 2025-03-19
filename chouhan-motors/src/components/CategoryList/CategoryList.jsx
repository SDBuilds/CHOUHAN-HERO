import { useState, useEffect } from "react";
import CategoryCard from "../UI/CategoryCard/CategoryCard";

const categoryImages = {
  Motorcycles: "/assets/XpulseCatCard.jpg",
  Premium: "/assets/Xtreme250RCatCard.jpg",
  Scooters: "/assets/Xoom160CatCard.jpg",
  Vida: "/assets/VidaCatCard.webp",
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/assets/bikes.json") // ✅ Correct path for public assets
      .then((response) => response.json())
      .then((data) => {
        // Group bikes by category and extract subcategories dynamically
        const categoryMap = {};

        data.forEach((bike) => {
          if (!categoryMap[bike.category]) {
            categoryMap[bike.category] = {
              category: bike.category,
              image: categoryImages[bike.category] || "/assets/default.jpg", // ✅ Use public URL
              description: `Explore our range of ${bike.category.toLowerCase()}.`,
              subcategories: new Set(),
            };
          }
          if (bike.subcategory) {
            categoryMap[bike.category].subcategories.add(bike.subcategory);
          }
        });

        // Convert subcategories from Set to Array
        const formattedCategories = Object.values(categoryMap).map((cat) => ({
          ...cat,
          subcategories: Array.from(cat.subcategories),
        }));

        // Add Vida category manually (if required)
        formattedCategories.push({
          category: "Vida",
          image: categoryImages["Vida"],
          description: "Visit Vida World.",
          externalLink: "https://www.vidaworld.com",
          subcategories: [],
        });

        setCategories(formattedCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category) => (
        <CategoryCard key={category.category} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
