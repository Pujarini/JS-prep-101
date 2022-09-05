
## Function statement

create a function with keyword ```function``` and a name.

## Function expression 

functions that are assigned as values.

## Difference b/w function statement & function declaration


```javascript
a(); // hello
c(); //TypeError, c is not a function

function a(){ 
console.log("hello");
}

var c= function (){ 
console.log("hello");
}
```
## Anonymous function
- functions with no name.

- They are used as values to assign it to a variable like in function expression.

```javascript
function (){}

```
## Named Function expressions

functions expressions having a named function

```javascript
let c = function abc(){
    console.log("c called");
}
c();// c called ✅
```
Can we do ```abc()```?

No!! It will throw ```ReferenceError```.
Why? Since xyz is not defined in outerscope. It is inside defined in the local scope of c.
So xyz will be a ```local variable```.👇🏼

## Local variable
A variable declared inside a function is only visible inside that function.

## Parameters and arguments

- data passed to functions are called Parameters.
- They are local variables in the function scope.


```
function abc(param1, param2){
    console.log(param1, param2)
}
```
### Arguments

values passed to the functions are called Arguments.

````abc(4,5);````


### First class functions / First class citizens

The ability of functions to be used as values in called first class functions.

How? 👇🏼

- They can be passed as arguments.

```javascript
let b = function (param1){
   console.log(param1); /* ƒ xyz(){
    console.log("xyz called")*/
}

}
function xyz(){
    console.log("xyz called")
}
b(xyz);
```

- They can be returned as a function from another function.

```javascript
let b = function (param1){
   return param1(); // xyz called
}
}
function xyz(){
    console.log("xyz called")
}
b(xyz);
```

## Hoisting in functions

- Functions are hoisted completely in JavaScript.
- The whole function is put in global scope.



For example 👇🏼

```javascript

xyz()

function xyz(){
    console.log("hi 👋"); //hi 👋
}
```

## Function scope

variables declared inside a function can be referenced within that function which is known as function scope.

```javascript
function xyz(){
    console.log(x); // undefined
    var x=6;
    console.log("xyz called"); // xyz called
}

xyz();
```

Q2
```javascript
var x=21;
function xyz(){
    console.log(x); // undefined ; since x is not defined in local scope of the function
    var x=6;
    console.log("xyz called"); // xyz called
}
xyz();

```

### spread v/s rest Parameters

Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

Let's see that in action 👇🏼

```javascript
function xyz(x,y){
return x+y;
}
xyz(...[4,5]); // spread parameters

```

```javascript
function xyz(name,...roles){ // rest parameters
return `${name} works as ${roles[0]} `
}
xyz("pujarini", "developer","nobody","😎"); //pujarini works as developer

```

with rest and spread parameters both

```javascript
function xyz(name,...roles){ // rest parameters
return `${name} works as ${roles[0]} `//pujarini works as developer
}
xyz(...["pujarini", "developer","nobody","😎"]); //spread parameters
```

```javascript
const fn = (a,...numbers,x,y){
    console.log(x,y); //SyntaxError: Rest parameter must be last formal parameter
}
fn(5,6,8,9);
```
So technically the rest parameter or spread parameters should the last parameters of the parameter list.



