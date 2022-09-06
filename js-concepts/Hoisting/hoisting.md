
# Hoisting

Hoisting is a phenomenon where you access the variables or functions even before ```initialization```.

```javascript

console.log(x);
getName();

var x=7;
function getName(){
    console.log("print me");
}
```

Let's see what will be the ouput

- x will print ```undefined```
- getName () will ```print me```

How?
Execution context 
The execution context gets created in 2 phases
1. Memory creation
2. Code execution

In memory creation undefined is assigned to the variables and functions are assigned the whole code of functions.

Example :

```javascript
console.log(x);
getName();

var x=7;
//arrow function
const getName = () => {
    console.log("print me");
}
```

Here the ouput will be :

undefined

ReferenceError : getName is not defined

Why ReferenceError? 
- Because here ```getName``` is a variable which is being called as function.

```javascript
console.log(x);
console.log(getName);

var x=7;
//arrow function
function getName(){
    console.log("print me");
}
```
This will print :
undefined
function getName(){
    console.log("print me");
}

Why? Because in the memory execution phase whole function is stored in the memory space.