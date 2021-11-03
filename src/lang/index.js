import Lexer from "./langLexer.js";
import parserModule from "./langParser.js";
import antlr from "antlr4";

export function tokenize(text) {
  const input = new antlr.InputStream(text);
  const lexer = new Lexer(input);
  const tokens = new antlr.CommonTokenStream(lexer);
  const parser = new parserModule(tokens);
  let errorMessage = ""
  parser.removeErrorListeners();
  parser.addErrorListener({ syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => errorMessage = msg });
  parser.parse()
  return errorMessage;
}