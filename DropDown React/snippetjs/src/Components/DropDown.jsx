import React, { useState } from 'react'
import './../App.css';

const DropDown = () => {


  const [select, setSelect] = useState();

   const [cty, setCty] = useState();

  const handleClick = (e) => {

    setSelect(
     e.target.value)
  }

     const handleClick1 = (e) => {
       setCty(e.target.value);
     };

  return (
    <div className="main">
      <h2>DropDown Selected Value in React with OnChange EventHandler</h2>
      <div className=''>
        <select value={select} onChange={handleClick} >
          <option>Hindi</option>
          <option>English</option>
          <option>French</option>
          <option>Japanese</option>
        </select>

        <select className="select-2nd" value={cty} onChange={handleClick1}>
          <option>USA</option>
          <option>UN</option>
          <option>JPN</option>
          <option>IND</option>
        </select>
      </div>

      <div className="result">
        <h3>Selected Language: {select}</h3>

        <h3>Selected Country: {cty}</h3>
      </div>
    </div>
  );
}

export default DropDown
