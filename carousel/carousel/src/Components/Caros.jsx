import React, { useState } from "react";
import git from "./../assets/git.png";
import js from "./../assets/js.png";
import react from "./../assets/react.png";
import css1 from "./../assets/css1.png";

const items = [
  {
    title: "Git",
    image: git,
  },
  {
    title: "JS",
    image: js,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "css",
    image: css1,
  },
];

const Caros = () => {

  const [activeItem, setActiveItem] = useState(0);

    const handleNext = () => {
         
        if (activeItem === items.length - 1) {
         setActiveItem(0);
 
        } else {
               setActiveItem((activeItem) => activeItem + 1);
     }

  };

    const handlePrev = () => {
        if (activeItem === 0) {
            setActiveItem(items.length - 1);
      }
    setActiveItem((activeItem) => activeItem - 1);
  };

  return (
    <div>
      <img src={items[activeItem].image} alt={items[activeItem].title} />
      <h3>{items[activeItem].title}</h3>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Caros;
