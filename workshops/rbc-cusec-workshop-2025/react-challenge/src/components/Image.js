import React from "react";
import './Image.css';

const Image = ({ url, title }) => (
  <li className="Image">
    <img src={url} alt={title} />
  </li>
);

export default Image;
