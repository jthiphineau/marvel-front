import React from "react";
import { Link } from "react-router-dom";

const Card = ({ hero }) => {
  return (
    <Link to={`/characters/`} className="card">
      <div className="hero-container">
        <div>{hero.name}</div>
        <img
          className="herosPics"
          src={hero.thumbnail.path + "." + hero.thumbnail.extension}
        ></img>
      </div>
    </Link>
  );
};

export default Card;
