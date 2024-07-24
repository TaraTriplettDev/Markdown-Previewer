import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `
# React Markdown Previewer 

## Markdown Examples:

# Header

## Sub-Header

[Link](https://www.freecodecamp.com)

\`<div>Inline Code</div>\`

\`\`\`
// This is
// a
// Code Block
\`\`\`

> Block Quote

**Bold Text**

_Italic Text_

**_Bold AND Italic Text!_**

- List with
  - different
    - Indentation levels

![freeCodeCamp logo in camel-case with a flame in parentheses](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const clearMarkdownText = () => {
    setMarkdownText('');
  };
  const resetMarkdownText = () => {
    setMarkdownText(defaultMarkdown);
  }
    return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div className="buttons-container">
          <button onClick={clearMarkdownText}>Clear</button>
          <button onClick={resetMarkdownText}>Reset</button>
          </div>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
        <br></br>
        <h1 style={{ textAlign: "center" }}>Example</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={defaultMarkdown}></textarea>
          <div id="preview">
            <ReactMarkdown>{defaultMarkdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

