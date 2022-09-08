
# Undefined v/s not defined

JS engine allocates space to all variables and functions even before execution.


```javascript

console.log(a); // undefined
var a=7;
console.log (a); // 7


console.log(x); // x is not defined

```
x is not defined because we have not allocated space to x.

Undefined is a placeholder which is assigned to variables and functions before code execution.

### Undefined != empty

Undefined is a placeholder which takes space until the variable is assigned some value.

JS is a loosely-typed language or weakly-typed language it doesn't bind its variables to a specific datatype.

example :

```javascript

var a;
console.log(a); // undefined
a=10;
console.log(a); //10
a= "Hello"
console.log(a); // Hello
```

### Avoid this ❌

- Assigning a variable ```undefined``` explicitly since it is assigned to a variable when there is nothing is assigned to the variable.


## Questions

### Q1

```javascript
function foo(a, b, undefined, undefined) {
  console.log('BFE.dev')
}
console.log(foo.length); //4 it returns the number of paramters.

```

### Q2

```javascript

console.log(JSON.stringify([1,2,null,3]))  // "[1,2,null,3]"
console.log(JSON.stringify([1,2,undefined,3]))  // JSON doesn't have undefined value, it's replaced with null in JSON data type.
console.log(null === undefined) // false  null -> 0 and undefined -> NaN, 
console.log(null == undefined) // true  Special rule: true -> Just Remember it
console.log(null == 0) // false 
console.log(null < 0) // false 
console.log(null > 0) // false 
console.log(null <= 0) // true 
console.log(null >= 0) // true 
console.log(undefined == 0)  // false 
console.log(undefined < 0)  // false 
console.log(undefined > 0)  // false 
console.log(undefined <= 0)  // false
console.log(undefined >= 0) // false

```