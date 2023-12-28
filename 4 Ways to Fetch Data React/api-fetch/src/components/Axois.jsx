import { useEffect, useState } from "react"
import axios from "axios";

const Axois = () => {
 
 
 const [data ,setData] = useState(null)
 
 
    useEffect(() => {
       
        axios
          .get("https://pokeapi.co/api/v2/pokemon/")
          .then((resp) => {
            setData(resp.data.message);
          });
  },[])
 
    return (
      <div>

             <h2>Puppys</h2>
            <img src={data} width={500} />
        <h2>{ data.name}</h2>  
      
      </div>
  )
}

export default Axois