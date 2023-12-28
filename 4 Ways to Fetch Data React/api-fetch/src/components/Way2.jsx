import React, { useState } from 'react'
import { useEffect } from 'react'



const ITEM_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0/";

const EXAMPLE_RESPONSE = {
  by: "jamilbk",
  id: 35908337,
  score: 1,
  time: 1683838872,
  title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/firezone/jobs",
};


function JobPosting({ url, title, by, time }) {
 
    const formattedTime = new Date(time * 1000).toLocaleString()
    
    return (
      <div className="post" role="listItem">
        <h2 className="post_title">
        
                <a className={url ? "" : "inactiveLink"}
                    href={url} target="_blank" rel="noopener">
            {title}
          </a>
            </h2>
            <span>BY { by} . {formattedTime} </span>
      </div>
    );
 

}


const [items ,setItems] = useState([EXAMPLE_RESPONSE,EXAMPLE_RESPONSE])

{

    items.length < 1 ? (
    <p className='loading'>loading...</p>
    ) : (
            
            <div>
                
                <div className='items' role='list'>
                    
                    
                  </div>

            </div>

            
            
)

}

























const Way2 = () => {
 
    const [data, setData] = useState([]);
    const [Loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null);


    const fetchData = async () => {
        
        try {
     
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                
                throw new Error("Response not ok");
            }
  
            const fetchedData = await response.json();
            setData(fetchedData);
 

           }
        catch (error) {
            SetError(error)
        }
        finally {
            SetLoading(false)
         }


    }


    useEffect(() => {
        fetchData();
    }, []);


  return (
    <div>
          {
              data.map((item) => {
                  return <h4 key={item.id}>{ item.title}</h4>  
              })
          }
    </div>
  )
}

export default Way2
