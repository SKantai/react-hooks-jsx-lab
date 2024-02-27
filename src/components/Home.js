import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const styles = { color: "firebrick"}
  return <div id="home">Home
    <h1 style={styles}>{name} is a Web Developer from {city}</h1>

  </div>;
}

export default Home;
