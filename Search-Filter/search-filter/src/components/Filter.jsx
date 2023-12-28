import "./FilterSe.css";
import JSONDATA from "../MOCK_DATA.json";
import { useState } from "react";

const Filter = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <div className="container">
          
            <input className="input" type="text" placeholder="Search..."
            onChange={event => {setSearchTerm(event.target.value)}}
          
            />
          {
                JSONDATA.filter((val) => {
                  
                    if (searchTerm == "") {
                        return val;
                    }
                    else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                   }

              }).map((val,key) => {
               
                  // eslint-disable-next-line react/jsx-key
                  return (
                      // eslint-disable-next-line react/jsx-key
                      <div key={key}>
                          {""}
                          <p>{val.first_name}</p>
                    </div>
                  );

           })}
      </div>
  )
}

export default Filter