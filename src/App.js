import { useState, useEffect } from "react";
import { tokenize } from "./lang";
import lexerModule from "./lang/langLexer.js";
import parserModule from "./lang/langParser.js";
import autoSuggest from "antlr4-autosuggest";


const App = ({ code }) => {
  const [value, setValue] = useState(code || "");
  const autoSuggester = autoSuggest.autosuggester(lexerModule, parserModule);

  useEffect(() => {
    // let suggestionsList = autoSuggester.autosuggest(value);
    // const tokens = tokenize(value).getAllTokens();
    console.log(tokenize(value))
  }, [value]);


  return (
    <div style={{
      height: "100vh",
      width: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      insert boolean expression here:
      <div style={{
        position: "relative"
      }}>
        <input
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        {
          (value !== "")
          &&
          <div style={{
              position: "absolute",
              backgroundColor: "#ebebeb",
              left: "0px",
              top: "30px",
              height: "300px",
              width: "100px",
              overflow: "auto",
              borderRadius: "5px"
          }}>
            {
              autoSuggester.autosuggest(value).map(item => <div>{item}</div>)
            }
          </div>
        }
      </div>
    </div>
  );
}
export default App
