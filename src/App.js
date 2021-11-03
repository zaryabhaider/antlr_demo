import { useState, useEffect } from "react";
import { tokenize } from "./lang";
// import Lexer from "./lang/langLexer.js";
// import Parser from "./lang/langParser.js";
import Lexer from "./lang/suggestions/suggestionsLexer.js";
import Parser from "./lang/suggestions/suggestionsParser.js";
import {concat, find, findIndex} from "lodash"
import autoSuggest from "antlr4-autosuggest";

const variables = [
  "height",
  "weight",
  "bloodPressure",
  "spo2",
  "heartRate",
  "respiratoryRate",
  "temperature",
  "bmi"
]


const App = () => {
  const [value, setValue] = useState("");
  const autoSuggester = autoSuggest.autosuggester(Lexer, Parser, 'LOWER');

  function getSuggestions() {
    let filteredSuggestions = []
    let suggestions = autoSuggester.autosuggest(value)
    suggestions.map(token => {
      if(!token.match(/[a-z]/i) && !token.match(/[0-9]/i)) filteredSuggestions.push(token)
      else if (token === "AND" || token === "OR") filteredSuggestions.push(token)
    })
    if(suggestions.includes('a')) {
      let tempArray = [...filteredSuggestions, ...variables]
      filteredSuggestions = [...tempArray]
    }
    if(filteredSuggestions[0] === "(") {
      filteredSuggestions.push(")")
    }
    return filteredSuggestions
  }


  return (
    <div style={{
      height: "100vh",
      padding: "50px",
      width: "100vh",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    }}>
      insert boolean expression here:
      <div style={{
        position: "relative"
      }}>
        <div style={{display: "flex", flexWrap: "nowrap"}}>
          <input
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          {
            value !== ""
            &&
            <div
              style={
                tokenize(value) !== ""
                ? { marginLeft: "5px", color: "red" }
                : { marginLeft: "5px", color: "green" }
              }
            >
              {
                value !== ""
                &&
                  tokenize(value) !== ""
                  ? tokenize(value)
                  : "valid expression"
              }
            </div>
          }
        </div>
        {
          (value !== "")
          &&
          <div style={{
              position: "absolute",
              backgroundColor: "#ebebeb",
              left: "0px",
              top: "30px",
              height: "300px",
              width: "200px",
              overflow: "auto",
              borderRadius: "5px"
          }}>
            {
              getSuggestions().map(item => <div>{item}</div>)
            }
          </div>
        }
      </div>
    </div>
  );
}
export default App
