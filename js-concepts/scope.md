
# Scope  in JavaScript

- Scope is related to lexical environment
- Scope means where you can access a specific variable or function in code.
- When a execution context is created a lexical environment is also created.

# lexical environment = local memory space + referencd to lexical environment of parent

 What is lexical --> means hierarchy or in order

 # Scope Chain 

 It is chain of lexical environment along with references to the parent lexical environment.

 - If a variable is not found in the scope chain then the variable is not present in the scope chain.

 Let's see an example


 ```javascript
function a(){
    var b=100;
    c();
    function c(){
        console.log(b); ---1?
    }
}
a();
console.log(b); --- 2?
 ```

let's start from c.

- c has lexical environment of local memory and a (parent of c).
- a has lexical environment of local memory and global execution context (parent of a).
- GEC has lexical environment of null which means end of scope chain.

so when c is invoked it looks for b in the lexical environment of c.

When it doesn't find c in it's lexical environment it looks for b in the lexical environment of it's parent i.e. a.

1.It looks for b in a and then when it finds out b it prints 10.

2.It looks for b in global execution context and since it is not there it will print b is not defined
