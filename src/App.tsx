import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App()  {
  const[markdownText,setMarkdownText] = useState(0);

  return<>
  <div>
    <h1>Markdown Previewer</h1>
  </div>
  </>
}


export default App;