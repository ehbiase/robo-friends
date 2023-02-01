import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <h2 className="">{name}</h2>
      <p className="">{email}</p>
    </div>
  );
};

export default Card;
