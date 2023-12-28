import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const Star = () => {

  const [rating,setRating] =  useState(null)
  const [ratcolor,setratColor] = useState(null) 
    
  return (
      <div style={
          {
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginLeft:"700px"
          }
    }>

          {
              
              [...Array(5)].map((star ,index )=> {
                  const currentRate = index + 1;
                  return (
                    <>
                      {" "}
                      <label>
                              <input type="radio" name="rate" value={currentRate}
                                  onClick={
                                  ()=>setRating(currentRate )
                              }   
                              />

                        <FontAwesomeIcon
                          style={{
                            fontSize: "2em",
                          }}
                                  icon={faStar}
                                  color={currentRate <= (ratcolor || rating) ? "yellow" : "grey"}
                        />
                      </label>
                    </>
                  );
           })

        }

    </div>
  )
}

export default Star