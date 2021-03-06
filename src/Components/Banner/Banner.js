import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../../requests/Requests';
import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const request = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
    );
    setMovie(
      request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );


    // request.data.results.map((result) => {
    //   image.
    // })
  }

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  // const banner_image = document.getElementById("banner_image");
  // var i = 0;
  // var time = 2000;
  // function changeImg() {
  //   banner_image.backgroundImage = ``;
  // }
  return (
    <div
      id='banner_image'
      className="banner"
      style={{
        backgroundImage: movie?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
          : 'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
        // 'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1>
          {" "}
          {movie?.original_name || movie?.original_title || movie?.title}{" "}
        </h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>Favorites</button>
        </div>
        <h3>{truncate(movie?.overview, 80)}</h3>
      </div>
    </div>
  );
}
