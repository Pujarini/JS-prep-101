# How functions work behind the scenes?

```javascript
var x=5;
a();
console.log(x)

function a(){
    var x=10;
    console.log(x);
}
Output: 
10
5
```

## How does function invocation and variable environment work?

How this program works behind the scene line by line?

Steps :

- A global execution context is created when JS engine executes a program

1. GEC has 2 components :

- memory component (also known as variable environment) and code component

2. Initally when the program is NOT executed the memory is allocated

So in the memory component x is ```undefined``` and ```function a``` has the function code.

3. When the program is executed at step first line

```x is assigned a value of 5 ==> x:5``` in the code component.

4. Then we encounter a function invocation of a();

in this case, a local execution context is created with 2 components again

- memory component
- code component

- Memory component has x as ```undefined``` in the initial state and 

- then we execute var x=10 in the code component and then we execute ```console.log(x)```.

5. Now when we encounter the last line in the function and executed the local execution context gets deleted and the control goes back to the global execution context where function invocation takes place.

6. Then ```console.log(x)``` is executed which prints the value of x in the available local context which is ```x= 5```

## Call stack working

- Global execution context is pushed to the call stack when the program starts executing.

- When a function invocation is encountered a local global execution context is created and then pushed on top of GEC.

- Once the function is executed fully then the local execution context is popped out of the call stack.

- After the program is executed fully then GEC gets popped out of the call stack.

