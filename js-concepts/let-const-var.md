# let , const and var

- let and const are hoisted too but different than var meaning they are in temporal dead zone for the time being.

- let and const are stored in memory space other than global execution context.

### What is Temporal dead zone?

- It is the time between the variable is hoisted and it is initialised with a value.

- If we try to access inside temporal dead zone we get reference error.

```javascript


console.log(a); // Reference Error: cannot a before initialization
let a=90; 

```

We can access any var variable on window object but cannot access any let and const variable in window.

### Syntax error

- If we try to declare let variable again then we get a Syntax error

```javascript
let a=90; 
let a=100; //SyntaxError: Identifier 'a' has already been declared
```

- where as in case of var we can redeclare and reinitialise

```javascript
var a=90; 
var a=100; //SyntaxError: Identifier 'a' has already been declared
```

- In case of const it works similar than let but more strict than let


```javascript
console.log(a)
const  a=90;   // ReferenceError: a is not defined
```

- const can not be declared once and initialised next time it should be done at the same time

```javascript
console.log(a);
const  a;
a=90;   //SyntaxError: Missing initializer in const declaration
```

- you cannot reassign a const variable

```javascript
const  a=90;
a=50;  // TypeError: Assignment to constant variable.
```

### SyntaxError, TypeError, ReferenceError

TypeError : occured when const was initialised with a new value.

SyntaxError : When const was not initialised with a value

ReferenceError : When we try to access a variable which is not present in the lexical environment.

### How to avoid Temporal dead zone?

We can avoid temporal dead zone by declaring and initializing at the top of the code.

