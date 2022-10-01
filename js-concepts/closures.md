# Closures

A closure is a  combination of function bundled together with it's lexical environment.

```javascript

function x(){
  var a=10;
  function y(){
    console.log(a);
  }
  y();
}
x();

```

In the above example function y forms a closure with the lexical parent and hence it prints the value of a as 10.

or say,

- y is bundled together with the reference to variables of x and can access it's parent lexical scope

```javascript
function x(){
  var a=10;
  function y(){
    console.log(a);
  }
  return y;
}
var z=x();
z(); //10

```

- Functions maintain their lexical scope when returned from a function so here z() will give a output of 10.

They remember where they are actually present.

- At return y a closure was returned instead of only function y.


```javascript
function x(){
  var a=10;
  function y(){
    console.log(a);
  }
  a=90;
  return y;
}
var z=x();
z(); //100

```

Here , we see that the output is 100 because function y forms a closure with the reference to variables of it's lexical parent.

So here a is poiniting to reference to a. So when we modify the value of a it takes the current value of a and prints 100.


```javascript

function z(){
  var b=90;
 function x(){
  var a=10;
  function y(){
    console.log(a,b); ---? 
  }
  y();
}
x();
}
z();
```
function y forms a closure with x and x forms a closure with z so it prints 10 and 90 respectively.

so y forms a closure with it's parent and with parent of parent.

### Uses of Closures

- module design pattern
- setTimeout
- currying
- memoize
- Iterators


### Interview Questions

## Q1

```javascript
function x(){
 var i=1;
 setTimeout(()=>{
   console.log(i);
 },2000);
console.log("hello");
}
x();
hello
1 (after 2000 ms)
```
JS will print what comes in call stack first so it prints hello and after 2s it will print 1.

setTimeout callback has the reference to a and it stores the reference with itself.


## Q2 Print 1-5 after 2 seconds. (Asked in ShareChat)

```javascript
function x(){
for(let i=1;i < 6;i++){
 setTimeout(()=>{
   console.log(i);
 },2000);
}
}
x();

1
2
3
4
5

```
So here let is used which is block scoped so the callback creates closure with a new variable everytime and hence we get all the values of i.

## Q3 Give the output of the following questions

```javascript
function x(){
for(var i=1;i < 6;i++){
 setTimeout(()=>{
   console.log(i);
 },2000);
}
}
x();

6
6
6
6
6
```

So here the callback is creating closure with the reference of i 5 times so after the timer expires the value of i is already 6 so it prints 6 (5 times)

## Q4 Resolve the issue in above code without using let

- We need to create a closure since we know it is poiniting to the reference of i.

```javascript
function x(){
    for(var i=1;i<6;i++){
        function p(x){
             setTimeout(()=>{
            console.log(x);
        },x*1000);
        }
        p(i)
    }
}
x();

1
2
3
4
5
```
So here we enclosed the setTimeout with another function by passing the value of i into function call. Every function call is different value of i hence it prints 1 2 3 4 5.

## Q5 Find the output of the below code snippet.

```javascript
function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
     a=90;
    return i;
}
outer()(); //90
```
Here inner function creates a closure with the parent function's reference to variable and so when the value of the reference changes we get 90 as output.


## Q6 Find the output of the below code snippet.

```javascript

function helloFunc(){
  let c = 900;
 function outer(b){
    let a = 10;
    function inner(){
        console.log(a,b,c);
    }
     a = 90;
    return inner;
 }
 return outer;
}

helloFunc()("hello"); //10 hello 900
```
Here inner function creates a closure with the parent function's reference to variable and so when the value of the reference changes we get 90 as output.


## Q7 Find the output of the below code snippet.

```javascript

function helloFunc(){
  let c = 900;
 function outer(b){
    function inner(){
        console.log(a,b,c);
    }
    return inner;
 }
 return outer;
}
let a = 100;
helloFunc()("hello")(); //100 hello 900
```

Since it finds reference to a in the parent's parent's parent so it prints a as 100

- it tries to resolve the value in the scope chain


## Q8 Find the output of the below code snippet.

```javascript
function counter(){
    let count=0;
    return function incrementCount(){
        count++;
        console.log(count);
    }
}
let count1=counter();
count1(); //1
count1();//2

```

## Q9 Disadvantages of closure

- overconsumption of memory meaning the variables are not garbage collected until a program expires.
- memory leak.

## Q10 Garbage collector

It is a program in JS engine which frees up unused memory when it is not utilised.

## Q11 Relation between garbage collector and closure

```javascript
function x(){
  var a=10,b=30; //here b will be garbage collected since it is not being used currently
  return function(){
    console.log(a);
  }
}
x()();
```

