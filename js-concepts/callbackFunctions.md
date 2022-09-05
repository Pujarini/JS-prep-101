
# Callback functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


- callbacks are often used to continue code execution after an asynchronous operation has completed — these are called ```asynchronous callbacks```.

Example : 


```javascript
setTimeout(() => console.log("You called me after 2s"),2000);
```


```javascript
button.addEventListener("click",()=> console.log("button clicked"));
```

# What is Call Stack?

- A call stack is a mechanism for an interpreter.

- It keeps track of the its place in a script that calls multiple functions - like which is the function being currently executed and which functions are currently been called within other function.

### How does the call stack work?

Let'see this through an example 👇🏻

```javascript

setTimeout(()=>{
    console.log("Hi I am called after 5s")
}, 5000);

function x(){
    console.log("x called");
    y();
}

function y(){
    console.log("y called");
}

x(y);

```

- setTimeout has a delay of 5s which means the callback function will get executed after 5s.

- call stack has now function x and function y which gets gets executed and "x called" and "y called" are console logged.

- After 5s expire the callback function of setTimeout gets pushed to callstack and gets executed which gives "Hi I am called after 5s"

```Call Stack is also called the main thread and JS has only one call stack.```

Anything executing on a page is executed through call stack.

# Closures with event Listeners


```javascript
var count=0;
document.getElementById("clickMe").addEventListener("click",()=>{
console.log(`button was clicked ${++count} times`);
})
```
We are using global variables here inside callback functions which might not be a good idea. So we make a closure by putting this code inside a function.

```javascript
function onClickListener(){
var count=0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
console.log(`button was clicked ${++count} times`);
})
onClickListener();
}

```

Here the ```xyz``` forms a closure with global scope and the local scope. So we have count value in check.

# RemoveEventlisteners and Garbage collection

Event listeners are heavy.Even though  the call stack is empty the memory is not freed Since they form closures with the lexical scope.
So we use removeEventlisteners to free up the space once is event handler is executed.
the variables which formed closures get garbage collected once removeEventListeners is executed. 


