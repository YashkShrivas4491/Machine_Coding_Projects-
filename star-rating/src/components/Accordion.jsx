import React, { useState } from "react";
import '../index.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mn1">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className="content">{isActive && <div className="content-show">{content}</div>}</div>
    </div>
  );
};

export default Accordion;
