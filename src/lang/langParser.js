// Generated from Documents/lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import langListener from './langListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u00138\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001f",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004-\n\u0004\f\u0004\u000e\u00040\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0002\u0003\u0006\b\u0002\u0004\u0006\b\n\f\u0002\u0005\u0003",
    "\u0002\u0003\u0007\u0003\u0002\b\f\u0003\u0002\r\u000e\u00027\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006",
    "\u001e\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n3\u0003\u0002",
    "\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e\u0010\u0005\u0006\u0004",
    "\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002",
    "\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002",
    "\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002",
    "\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0016\u0007\u0002\u0002",
    "\u0003\u0016\u0005\u0003\u0002\u0002\u0002\u0017\u0018\b\u0004\u0001",
    "\u0002\u0018\u0019\u0007\u000f\u0002\u0002\u0019\u001a\u0005\u0006\u0004",
    "\u0002\u001a\u001b\u0007\u0010\u0002\u0002\u001b\u001f\u0003\u0002\u0002",
    "\u0002\u001c\u001f\u0007\u0012\u0002\u0002\u001d\u001f\u0007\u0011\u0002",
    "\u0002\u001e\u0017\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f.\u0003\u0002\u0002",
    "\u0002 !\f\u0007\u0002\u0002!\"\u0005\b\u0005\u0002\"#\u0005\u0006\u0004",
    "\b#-\u0003\u0002\u0002\u0002$%\f\u0006\u0002\u0002%&\u0005\n\u0006\u0002",
    "&\'\u0005\u0006\u0004\u0007\'-\u0003\u0002\u0002\u0002()\f\u0005\u0002",
    "\u0002)*\u0005\f\u0007\u0002*+\u0005\u0006\u0004\u0006+-\u0003\u0002",
    "\u0002\u0002, \u0003\u0002\u0002\u0002,$\u0003\u0002\u0002\u0002,(\u0003",
    "\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002",
    "./\u0003\u0002\u0002\u0002/\u0007\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000212\t\u0002\u0002\u00022\t\u0003\u0002\u0002\u000234\t\u0003",
    "\u0002\u00024\u000b\u0003\u0002\u0002\u000256\t\u0004\u0002\u00026\r",
    "\u0003\u0002\u0002\u0002\u0006\u0011\u001e,."].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class langParser extends antlr4.Parser {

    static grammarFileName = "lang.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'%'", "'>'", 
                            "'>='", "'<'", "'<='", "'='", "'AND'", "'OR'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "AND", "OR", "LPAREN", "RPAREN", 
                             "DECIMAL", "IDENTIFIER", "WS" ];
    static ruleNames = [ "program", "parse", "expression", "operator", "comparator", 
                         "binary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = langParser.ruleNames;
        this.literalNames = langParser.literalNames;
        this.symbolicNames = langParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, langParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << langParser.LPAREN) | (1 << langParser.DECIMAL) | (1 << langParser.IDENTIFIER))) !== 0)) {
	            this.state = 12;
	            this.expression(0);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, langParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.expression(0);
	        this.state = 19;
	        this.match(langParser.EOF);
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
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, langParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case langParser.LPAREN:
	            localctx = new ParenExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 22;
	            this.match(langParser.LPAREN);
	            this.state = 23;
	            this.expression(0);
	            this.state = 24;
	            this.match(langParser.RPAREN);
	            break;
	        case langParser.IDENTIFIER:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 26;
	            this.match(langParser.IDENTIFIER);
	            break;
	        case langParser.DECIMAL:
	            localctx = new DecimalExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(langParser.DECIMAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 42;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OperatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, langParser.RULE_expression);
	                    this.state = 30;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 31;
	                    localctx.op = this.operator();
	                    this.state = 32;
	                    localctx.right = this.expression(6);
	                    break;

	                case 2:
	                    localctx = new ComparatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, langParser.RULE_expression);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 35;
	                    localctx.op = this.comparator();
	                    this.state = 36;
	                    localctx.right = this.expression(5);
	                    break;

	                case 3:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, langParser.RULE_expression);
	                    this.state = 38;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 39;
	                    localctx.op = this.binary();
	                    this.state = 40;
	                    localctx.right = this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 6, langParser.RULE_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << langParser.T__0) | (1 << langParser.T__1) | (1 << langParser.T__2) | (1 << langParser.T__3) | (1 << langParser.T__4))) !== 0))) {
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



	comparator() {
	    let localctx = new ComparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, langParser.RULE_comparator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << langParser.T__5) | (1 << langParser.T__6) | (1 << langParser.T__7) | (1 << langParser.T__8) | (1 << langParser.T__9))) !== 0))) {
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
	    this.enterRule(localctx, 10, langParser.RULE_binary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!(_la===langParser.AND || _la===langParser.OR)) {
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

langParser.EOF = antlr4.Token.EOF;
langParser.T__0 = 1;
langParser.T__1 = 2;
langParser.T__2 = 3;
langParser.T__3 = 4;
langParser.T__4 = 5;
langParser.T__5 = 6;
langParser.T__6 = 7;
langParser.T__7 = 8;
langParser.T__8 = 9;
langParser.T__9 = 10;
langParser.AND = 11;
langParser.OR = 12;
langParser.LPAREN = 13;
langParser.RPAREN = 14;
langParser.DECIMAL = 15;
langParser.IDENTIFIER = 16;
langParser.WS = 17;

langParser.RULE_program = 0;
langParser.RULE_parse = 1;
langParser.RULE_expression = 2;
langParser.RULE_operator = 3;
langParser.RULE_comparator = 4;
langParser.RULE_binary = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = langParser.RULE_program;
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

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitProgram(this);
		}
	}


}



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
        this.ruleIndex = langParser.RULE_parse;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(langParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
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
        this.ruleIndex = langParser.RULE_expression;
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
	    if(listener instanceof langListener ) {
	        listener.enterBinaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitBinaryExpression(this);
		}
	}


}

langParser.BinaryExpressionContext = BinaryExpressionContext;

class DecimalExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(langParser.DECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterDecimalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitDecimalExpression(this);
		}
	}


}

langParser.DecimalExpressionContext = DecimalExpressionContext;

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
	    if(listener instanceof langListener ) {
	        listener.enterOperatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitOperatorExpression(this);
		}
	}


}

langParser.OperatorExpressionContext = OperatorExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(langParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}


}

langParser.IdentifierExpressionContext = IdentifierExpressionContext;

class ParenExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(langParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(langParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterParenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitParenExpression(this);
		}
	}


}

langParser.ParenExpressionContext = ParenExpressionContext;

class ComparatorExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // ComparatorContext;
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

	comparator() {
	    return this.getTypedRuleContext(ComparatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterComparatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitComparatorExpression(this);
		}
	}


}

langParser.ComparatorExpressionContext = ComparatorExpressionContext;

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
        this.ruleIndex = langParser.RULE_operator;
    }


	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitOperator(this);
		}
	}


}



class ComparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = langParser.RULE_comparator;
    }


	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterComparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitComparator(this);
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
        this.ruleIndex = langParser.RULE_binary;
    }

	AND() {
	    return this.getToken(langParser.AND, 0);
	};

	OR() {
	    return this.getToken(langParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.enterBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof langListener ) {
	        listener.exitBinary(this);
		}
	}


}




langParser.ProgramContext = ProgramContext; 
langParser.ParseContext = ParseContext; 
langParser.ExpressionContext = ExpressionContext; 
langParser.OperatorContext = OperatorContext; 
langParser.ComparatorContext = ComparatorContext; 
langParser.BinaryContext = BinaryContext; 
