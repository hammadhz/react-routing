import React from "react";
import "../Home.css";
import beauty from "../beauty.jpg";

function Home() {
  const img = beauty;
  return (
    <div className="body">
      <h3>Home Page</h3>
      <img src={img} alt="" />
      <p>Hammad</p>
    </div>
  );
}

export default Home;
