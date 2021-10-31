// Generated from Documents/lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0011Y\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0005\u000e=\n\u000e\u0003\u000e\u0006\u000e@\n\u000e\r\u000e",
    "\u000e\u000eA\u0003\u000e\u0003\u000e\u0006\u000eF\n\u000e\r\u000e\u000e",
    "\u000eG\u0005\u000eJ\n\u000e\u0003\u000f\u0003\u000f\u0007\u000fN\n",
    "\u000f\f\u000f\u000e\u000fQ\u000b\u000f\u0003\u0010\u0006\u0010T\n\u0010",
    "\r\u0010\u000e\u0010U\u0003\u0010\u0003\u0010\u0002\u0002\u0011\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011\u0003\u0002\u0006\u0003\u00022;\u0005\u0002C\\aac|\u0006\u0002",
    "2;C\\aac|\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002^\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005#\u0003\u0002",
    "\u0002\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002\u0002",
    "\u000b)\u0003\u0002\u0002\u0002\r+\u0003\u0002\u0002\u0002\u000f-\u0003",
    "\u0002\u0002\u0002\u00110\u0003\u0002\u0002\u0002\u00132\u0003\u0002",
    "\u0002\u0002\u00155\u0003\u0002\u0002\u0002\u00177\u0003\u0002\u0002",
    "\u0002\u00199\u0003\u0002\u0002\u0002\u001b<\u0003\u0002\u0002\u0002",
    "\u001dK\u0003\u0002\u0002\u0002\u001fS\u0003\u0002\u0002\u0002!\"\u0007",
    "-\u0002\u0002\"\u0004\u0003\u0002\u0002\u0002#$\u0007/\u0002\u0002$",
    "\u0006\u0003\u0002\u0002\u0002%&\u0007,\u0002\u0002&\b\u0003\u0002\u0002",
    "\u0002\'(\u00071\u0002\u0002(\n\u0003\u0002\u0002\u0002)*\u0007\'\u0002",
    "\u0002*\f\u0003\u0002\u0002\u0002+,\u0007@\u0002\u0002,\u000e\u0003",
    "\u0002\u0002\u0002-.\u0007@\u0002\u0002./\u0007?\u0002\u0002/\u0010",
    "\u0003\u0002\u0002\u000201\u0007>\u0002\u00021\u0012\u0003\u0002\u0002",
    "\u000223\u0007>\u0002\u000234\u0007?\u0002\u00024\u0014\u0003\u0002",
    "\u0002\u000256\u0007?\u0002\u00026\u0016\u0003\u0002\u0002\u000278\u0007",
    "*\u0002\u00028\u0018\u0003\u0002\u0002\u00029:\u0007+\u0002\u0002:\u001a",
    "\u0003\u0002\u0002\u0002;=\u0007/\u0002\u0002<;\u0003\u0002\u0002\u0002",
    "<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002>@\t\u0002\u0002",
    "\u0002?>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A?\u0003\u0002",
    "\u0002\u0002AB\u0003\u0002\u0002\u0002BI\u0003\u0002\u0002\u0002CE\u0007",
    "0\u0002\u0002DF\t\u0002\u0002\u0002ED\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HJ\u0003\u0002\u0002\u0002IC\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002J\u001c\u0003\u0002\u0002\u0002KO\t\u0003\u0002\u0002LN\t\u0004",
    "\u0002\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P\u001e\u0003\u0002\u0002",
    "\u0002QO\u0003\u0002\u0002\u0002RT\t\u0005\u0002\u0002SR\u0003\u0002",
    "\u0002\u0002TU\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\b\u0010\u0002\u0002X",
    " \u0003\u0002\u0002\u0002\t\u0002<AGIOU\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class langLexer extends antlr4.Lexer {

    static grammarFileName = "lang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", 
                         "'>='", "'<'", "'<='", "'='", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, "GT", "GE", 
                          "LT", "LE", "EQ", "LPAREN", "RPAREN", "DECIMAL", 
                          "IDENTIFIER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "GT", "GE", 
                      "LT", "LE", "EQ", "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIER", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

langLexer.EOF = antlr4.Token.EOF;
langLexer.T__0 = 1;
langLexer.T__1 = 2;
langLexer.T__2 = 3;
langLexer.T__3 = 4;
langLexer.T__4 = 5;
langLexer.GT = 6;
langLexer.GE = 7;
langLexer.LT = 8;
langLexer.LE = 9;
langLexer.EQ = 10;
langLexer.LPAREN = 11;
langLexer.RPAREN = 12;
langLexer.DECIMAL = 13;
langLexer.IDENTIFIER = 14;
langLexer.WS = 15;



