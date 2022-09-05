
# How does your JS code execute behind the scene? 

- Everything in JS happens inside a execution context.

### What is Execution context?

Execution context has two components : 

1. ```memory component (variable environment)``` which stores variables and functions in key-value pairs.
2. ```Code component(Thread of Execution)``` where code is executed line by line.

### JS is a synchronous single-threaded language

```Single-threaded``` : It can execute one command at a time

```Synchronous``` : It can execute one command at a time in a specific order.

Moves to next line once the line executed before it.


### What happens when you run JS code?

Things happen inside JS engine when JS code is executed.

```javascript

var n=4;
function square (num){
    var ans= num*num;
    return ans;
}
var square1 = square(n);
var square 2 = square(4); 
```
## Steps


1. ```Global execution context``` is created which has two components

i. Memory component

ii. Code component

2. Execution context is created in 2 phases

i. Memory Creation phase 

ii. Code Execution phase


### Memory Creation phase

JS skims through the whole program and allocates memory to JS variables and functions inside global space.

So the above code in the memory component will look like

```

n : undefined

square : {...} whole function

square1 : undefined

square2 : undefined

```

variables are assigned a special variable called "undefined"
where as

incase of function it stores the whole code inside the memory space.

### Code Execution phase

In this phase code is executed line by line

- 2 is assigned to n.
- It will skip the function part and move to next line where function invocation takes place.


What is function invocation?

Function call with brackets having or not having arguments.

Functions behave differently in JS. When a function is invoked a new execution context is created.

Functions are heart of JS and they behave like mini programs

So for  square(n) a new execution context is created.

It gets executed in 2 phases.

1. Memory Creation phase

- Here memory is allocated to variables and functions in case square(n),
`num` and `ans` will be  assigned undefined.

P.S. :  `num` is a parameter and `ans` is a variable inside square().

2. Code execution phase

- Each line is executed the value of `n` which is the argument of the function is passed to `num` which is a parameter of function.

- `ans` is assigned num*num which is 4.

- then we encounter return keyword which means that we have to return the control of the program where it was invoked.

- square1 gets the value of ans which is 4.

- The execution context gets deleted after the control is passed.


P.S. : Same thing happens for square2.

- square2 gets the value 16 which was earlier undefined.

As soon as the JS is done with the work and program is executed The global execution context gets deleted.



### Call stack

It is difficult for JS engine to manage the creation, deletion of execution context

It manages a stack for all the operations of execution context.

Initially when the global execution context is created we push it to the stack.

When a new execution context is created inside global execution context we push it on top and when the work is done it gets deleted or pop out of the stack.

This is how a code is executed inside a JS engine.

```Call stack maintains the order of execution of the execution context.```








