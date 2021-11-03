grammar lang;

program: expression*;

parse
    : expression EOF
    ;

expression
    : LPAREN expression RPAREN                       #parenExpression
    | left=expression op=operator right=expression   #operatorExpression
    | left=expression op=comparator right=expression #comparatorExpression
    | left=expression op=binary right=expression     #binaryExpression
    | IDENTIFIER                                     #identifierExpression
    | DECIMAL                                        #decimalExpression
    ;

operator : '+' | '-' | '*' | '/' | '%' ;

comparator : '>' | '>=' | '<' | '<=' | '=' ;

binary : AND | OR;

AND        : 'AND' ;
OR         : 'OR' ;
LPAREN     : '(' ;
RPAREN     : ')' ;
DECIMAL    : '-'? [0-9]+ ( '.' [0-9]+ )? ;
IDENTIFIER : [a-zA-Z_] [a-zA-Z_0-9]* ;
WS         : [ \r\t\u000C\n]+ -> skip;