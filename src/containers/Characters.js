import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("coucou");
  const fetchData = async () => {
    const response = await axios.get(
      "https://marvel-backend-jt.herokuapp.com/characters"
    );

    setData(response.data);

    console.log(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p> En cours de chargement...</p>
      ) : (
        <div>
          <div>
            {data.data.results.map((hero, index) => {
              return (
                <div className="heroes-container">
                  <div className="hero-container">
                    <div>{hero.name}</div>
                    <img
                      className="herosPics"
                      src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                    ></img>
                    <div>{hero.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
