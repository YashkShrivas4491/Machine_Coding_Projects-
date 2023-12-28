import Way1st from "./components/way1st";
import Axois from "./components/Axois";
import Swr from "./components/Swr"
import { Suspense } from "react";
import Way2 from "./components/Way2";
import './App.css'


function App() {


  return (
    <div className="api">
      {/* <Way1st/> */}
       {/* <Axois/> */}
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Swr/>
      </Suspense> */}
      <Way2/>
    </div>
  )
}

export default App
