
# Objects


## Object basics

What are Objects?

Objects are used to store key collections of various data and complex entities.

- Object propety ---> key (only string) : value (anything)

### Creation of Objects

1. let user = new Object(); // "object constructor" syntax
2. let user = {}; "object literal" syntax


### Accessing an object

We can access a property value using 
1. dot (.) notation.
2. Square [] brackets. (in case of multiword key)



```javascript
const user = {
    "name":"Jen",
    "age":25,
    "hobbies todo": "play"
}

console.log(user.name); // Jen
console.log(user.age);// 25

console.log(user.["hobbies todo"]);// play

```

### Delete an object property

```delete user.age;```


### Property naming limitation



A variable cannot have a name equal to one of the language-reserved words

But for an object property, there’s no such restriction

```javascript
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return ); //6 
```

⭐️ Gotcha

- there is a special property called __proto__ attached. to every object.

- We can't set a non-object value to __proto__.

### Check a property existance in an object

```javascript
let user = { name: "Jen", age: 23 };
console.log("name" in user); // Jen
```

### Iteration through Objects

We can use ```for..in``` to iterate through objects.

```javascript

let user = {
  name: "Jen",
  age: 20,
  isAdmin: false
};

user.todo = "play"

for (let key in user) {
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 20, false, play
}
```
- they are printed in the order of creation of object properties.


Q. check the properties of an object are empty or not using a function
```isEmpty(user)```

```javascript

function isEmpty(obj){
for(key in  obj){
return false
} return true;
}


```
