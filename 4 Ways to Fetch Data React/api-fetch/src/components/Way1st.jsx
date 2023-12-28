import { useEffect, useState } from "react"
import '../App.css'
const Way1st = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData.message);
        });
    }, []);

  return (
    <div className="app">
      <img src={data} width={500} />
    </div>
  );
}

export default Way1st