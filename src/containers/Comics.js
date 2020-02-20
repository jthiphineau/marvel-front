import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("coucou");
  const fetchData = async () => {
    const response = await axios.get(
      "https://marvel-backend-jt.herokuapp.com/comics"
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
            {data.data.results.map((comic, index) => {
              return (
                <div className="heroes-container">
                  <div className="hero-container">
                    <div>{comic.title}</div>
                    <img
                      className="herosPics"
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                    ></img>
                    <div>{comic.description}</div>
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

export default Comics;
