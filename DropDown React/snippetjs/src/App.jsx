import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import  Snippet  from "./Components/Snippet";
import './App.css'


import DropDown from './Components/DropDown'

function App() {
  const codeString = "(num) => num + 1";
  return (
    <div>
      {/* <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter> */}

      {/* <div className="code">
        <Snippet />
      </div> */}

      {/* <Chatgpt/> */}

     <DropDown/>

    </div>
  );
}

export default App;
