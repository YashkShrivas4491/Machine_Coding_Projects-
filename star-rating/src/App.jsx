import React from 'react';
import Accordion from './components/Accordion'
import { accordionData } from './utils/content';
import "./index.css"


const App = () => {
  return (
    <div className="mn">
      <h1>React Accordion Demo</h1>
      <div className='mn1'>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;