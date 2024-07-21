JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
let (new in ECMAScript 6)-->  
const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
ternary operator -->
switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
//function expression
var a = function name() {}
//function declaration: 
function name() {}
return
// Arrow function
() => {}
//Arrow functions in JavaScript use lexical scoping for this instead of dynamic scoping. 
//This means that the value of this is determined by the context in which the arrow function is defined, 
//not by how or where the function is invoked. In other words, this inside an arrow function retains 
//the value from its enclosing lexical context, regardless of which object calls the function.


JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000) // Infinity