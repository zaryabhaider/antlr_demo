// Generated from Documents/suggestions.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import suggestionsListener from './suggestionsListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0003\u0004\u0006\u0002\u0004",
    "\u0006\b\u0002\u0004\u0003\u0002\u0003\f\u0003\u0002\r\u000e\u0002\'",
    "\u0002\n\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002",
    "\u0006#\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\u000b\u0005",
    "\u0004\u0003\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002",
    "\u0002\u0002\r\u000e\b\u0003\u0001\u0002\u000e\u000f\u0007\u000f\u0002",
    "\u0002\u000f\u0010\u0005\u0004\u0003\u0002\u0010\u0011\u0007\u0010\u0002",
    "\u0002\u0011\u0015\u0003\u0002\u0002\u0002\u0012\u0015\u0007\u0012\u0002",
    "\u0002\u0013\u0015\u0007\u0011\u0002\u0002\u0014\r\u0003\u0002\u0002",
    "\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002",
    "\u0002\u0015 \u0003\u0002\u0002\u0002\u0016\u0017\f\u0006\u0002\u0002",
    "\u0017\u0018\u0005\u0006\u0004\u0002\u0018\u0019\u0005\u0004\u0003\u0007",
    "\u0019\u001f\u0003\u0002\u0002\u0002\u001a\u001b\f\u0005\u0002\u0002",
    "\u001b\u001c\u0005\b\u0005\u0002\u001c\u001d\u0005\u0004\u0003\u0006",
    "\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u0016\u0003\u0002\u0002\u0002",
    "\u001e\u001a\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002",
    " \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u0005\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\t\u0002\u0002\u0002",
    "$\u0007\u0003\u0002\u0002\u0002%&\t\u0003\u0002\u0002&\t\u0003\u0002",
    "\u0002\u0002\u0005\u0014\u001e "].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class suggestionsParser extends antlr4.Parser {

    static grammarFileName = "suggestions.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", 
                            "'>='", "'<'", "'<='", "'='", "'AND'", "'OR'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "AND", "OR", "LPAREN", "RPAREN", 
                             "DECIMAL", "IDENTIFIER", "WS" ];
    static ruleNames = [ "parse", "expression", "operator", "binary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = suggestionsParser.ruleNames;
        this.literalNames = suggestionsParser.literalNames;
        this.symbolicNames = suggestionsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, suggestionsParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.expression(0);
	        this.state = 9;
	        this.match(suggestionsParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, suggestionsParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case suggestionsParser.LPAREN:
	            localctx = new ParenExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 12;
	            this.match(suggestionsParser.LPAREN);
	            this.state = 13;
	            this.expression(0);
	            this.state = 14;
	            this.match(suggestionsParser.RPAREN);
	            break;
	        case suggestionsParser.IDENTIFIER:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 16;
	            this.match(suggestionsParser.IDENTIFIER);
	            break;
	        case suggestionsParser.DECIMAL:
	            localctx = new DecimalExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 17;
	            this.match(suggestionsParser.DECIMAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 28;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OperatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, suggestionsParser.RULE_expression);
	                    this.state = 20;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 21;
	                    localctx.op = this.operator();
	                    this.state = 22;
	                    localctx.right = this.expression(5);
	                    break;

	                case 2:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, suggestionsParser.RULE_expression);
	                    this.state = 24;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 25;
	                    localctx.op = this.binary();
	                    this.state = 26;
	                    localctx.right = this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 32;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, suggestionsParser.RULE_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << suggestionsParser.T__0) | (1 << suggestionsParser.T__1) | (1 << suggestionsParser.T__2) | (1 << suggestionsParser.T__3) | (1 << suggestionsParser.T__4) | (1 << suggestionsParser.T__5) | (1 << suggestionsParser.T__6) | (1 << suggestionsParser.T__7) | (1 << suggestionsParser.T__8) | (1 << suggestionsParser.T__9))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binary() {
	    let localctx = new BinaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, suggestionsParser.RULE_binary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!(_la===suggestionsParser.AND || _la===suggestionsParser.OR)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

suggestionsParser.EOF = antlr4.Token.EOF;
suggestionsParser.T__0 = 1;
suggestionsParser.T__1 = 2;
suggestionsParser.T__2 = 3;
suggestionsParser.T__3 = 4;
suggestionsParser.T__4 = 5;
suggestionsParser.T__5 = 6;
suggestionsParser.T__6 = 7;
suggestionsParser.T__7 = 8;
suggestionsParser.T__8 = 9;
suggestionsParser.T__9 = 10;
suggestionsParser.AND = 11;
suggestionsParser.OR = 12;
suggestionsParser.LPAREN = 13;
suggestionsParser.RPAREN = 14;
suggestionsParser.DECIMAL = 15;
suggestionsParser.IDENTIFIER = 16;
suggestionsParser.WS = 17;

suggestionsParser.RULE_parse = 0;
suggestionsParser.RULE_expression = 1;
suggestionsParser.RULE_operator = 2;
suggestionsParser.RULE_binary = 3;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = suggestionsParser.RULE_parse;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(suggestionsParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitParse(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = suggestionsParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BinaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // BinaryContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	binary() {
	    return this.getTypedRuleContext(BinaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterBinaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitBinaryExpression(this);
		}
	}


}

suggestionsParser.BinaryExpressionContext = BinaryExpressionContext;

class DecimalExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(suggestionsParser.DECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterDecimalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitDecimalExpression(this);
		}
	}


}

suggestionsParser.DecimalExpressionContext = DecimalExpressionContext;

class OperatorExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // OperatorContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterOperatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitOperatorExpression(this);
		}
	}


}

suggestionsParser.OperatorExpressionContext = OperatorExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(suggestionsParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}


}

suggestionsParser.IdentifierExpressionContext = IdentifierExpressionContext;

class ParenExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(suggestionsParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(suggestionsParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterParenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitParenExpression(this);
		}
	}


}

suggestionsParser.ParenExpressionContext = ParenExpressionContext;

class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = suggestionsParser.RULE_operator;
    }


	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitOperator(this);
		}
	}


}



class BinaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = suggestionsParser.RULE_binary;
    }

	AND() {
	    return this.getToken(suggestionsParser.AND, 0);
	};

	OR() {
	    return this.getToken(suggestionsParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.enterBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof suggestionsListener ) {
	        listener.exitBinary(this);
		}
	}


}




suggestionsParser.ParseContext = ParseContext; 
suggestionsParser.ExpressionContext = ExpressionContext; 
suggestionsParser.OperatorContext = OperatorContext; 
suggestionsParser.BinaryContext = BinaryContext; 
