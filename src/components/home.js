import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/saga">saga</Link>
      </li>
      <li>
        <Link to="/context">context</Link>
      </li>
    </ul>
  );
};

export default Home;
