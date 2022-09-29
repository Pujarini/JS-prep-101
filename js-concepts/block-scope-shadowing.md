# block scope and shadowing


### What is a block?

block (compound statement) is defined as the code within curly braces
 - They are used to combine a lot of JS statement into a group.

 - we use a block in a place where JS expects single statement

 ### What is a block-scope?

 - the variables and function which are accessible inside the block.

 - let and const are considered block-scope since they are initialised in different scope.

 - you can't access let and const declared in a block outside the block but you can acces var outside the variable.

 
```javascript
{
    let a=90;
    const b=70;
    var c=60;
    console.log(a); //90
    console.log(b); //70
    console.log(c); //60
}

console.log(a); // Reference Error --> it will stop here
console.log(b);
console.log(c);
```

### What is shadowing?

shadowing occurs when the let and const variables are declared with same name in different scope.

```javascript

const c=90;
let b=80;
var a=100
{
    const c=100;
    let b=800;
    var a=1000;
    console.log(c);//100
    console.log(b);//800
    console.log(a);//1000
}
console.log(c);//90
console.log(b);//80
console.log(a);//1000
```
the var variable gets shadowed as var is in global scope where as in case let and const outside the block are in scipt scope instead of global and inside the block are in block scope.

### Illegal shadowing

we cannot shadow a let variable with var variable.

```javascript
let b=90; 
{
    var b=90;
    console.log(b);
}
console.log(b); //SyntaxError: Identifier 'b' has already been declared
```

- no variable should cross the boundary of it's limits.

example in the above example var is crossing limit by breaking the rule of redeclaration is invalid in let.
 but var is function-scoped

 ```javascript
let b=90; 
function x(){
    var b=90;
    console.log(b);//90
}
x();
console.log(b); //90
```

- block-scope also follows lexical scope.

- Every block has its own lexical scope


 ```javascript
let b=90; 
{
    let b=900;
    {
        let b=9000;
        console.log(b); //9000
    }
    console.log(b);//900
}
console.log(b); //90
```

- arrow and normal functions have same scope.
