grammar lang;

program: expression*;

parse
    : expression EOF
    ;

expression
    : LPAREN expression RPAREN                       #parenExpression
    | left=expression op=operator right=expression   #operatorExpression
    | IDENTIFIER                                     #identifierExpression
    | DECIMAL                                        #decimalExpression
    ;

operator : '+' | '-' | '*' | '/' | '%' ;

GT         : '>' ;
GE         : '>=' ;
LT         : '<' ;
LE         : '<=' ;
EQ         : '=' ;
LPAREN     : '(' ;
RPAREN     : ')' ;
DECIMAL    : '-'? [0-9]+ ( '.' [0-9]+ )? ;
IDENTIFIER : [a-zA-Z_] [a-zA-Z_0-9]* ;
WS         : [ \r\t\u000C\n]+ -> skip;