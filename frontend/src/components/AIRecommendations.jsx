import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const AIRecommendations = ({ currentProduct }) => {
  const { backendUrl, products } = useContext(ShopContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchAIRecommendations = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/ai/recommend`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: [currentProduct],
            products,
          }),
        });
        const data = await res.json();
        if (data.success) setRecommendations(data.recommendations);
      } catch (error) {
        console.error("AI Recommendation failed:", error);
      }
    };

    if (currentProduct) fetchAIRecommendations();
  }, [currentProduct, backendUrl, products]);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-16">
      <Title text1="AI" text2="RECOMMENDATIONS" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
        {recommendations.map((item) => (
          <div
            key={item._id}
            className="border p-3 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="rounded-md mb-3 w-full"
            />
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
