import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <div className="border-b border-gray-400 my-2"></div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
