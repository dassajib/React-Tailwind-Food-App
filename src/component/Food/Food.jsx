import React, { useContext, useState } from "react";
import { data } from "../../data/data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../CartContext";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const { handleAddToCart } = useContext(CartContext);

  // food filter
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-center font-bold text-4xl text-orange-600">
        Our Food's
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="py-4">
          <p className="font-bold text-gray-700 px-2">Filter Type</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
            <button className="m-1 border-orange-600 text-orange-600">
              <form action="">
                <input
                  className="rounded-2xl"
                  type="text"
                  name="name"
                  placeholder="By Name"
                  autoComplete="off"
                  aria-label="By Name"
                ></input>
              </form>
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700 px-2">Filter Price</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => filterPrice("$10")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $10
            </button>
            <button
              onClick={() => filterPrice("$50")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $50
            </button>
            <button
              onClick={() => filterPrice("$100")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $100
            </button>
            {/* <button onClick={() => filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button> */}
          </div>
        </div>
      </div>

      {/* image display */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-2">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg rounded-lg duration-300 hover:scale-105"
            key={index}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <div className="flex justify-between">
                <p>
                  <span className="bg-orange-700 rounded-full text-white p-1">
                    {item.price}
                  </span>
                </p>
                <AiOutlineShoppingCart
                  onClick={() => handleAddToCart(item.name, item.price)}
                  size={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
