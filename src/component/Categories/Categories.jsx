import React from "react";
import { categories } from "../../data/data.js";

const Categories = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <div>
        <h1 className="bg-orange-600 text-center text-4xl rounded-md py-2 text-white">
          Our Menu
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img className="w-20" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
