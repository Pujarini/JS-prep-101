
# Objects Interview questions

Q1

```javascript
const  user = {
    name:"puja",
    age:25
}

console.log(user.name); //puja
delete user.age;
console.log(user); // {"name":"puja"}

```

Q2

```javascript
const  func = (function (a){
    delete a;
    return a;
})(5);

console.log(func); // 5 because delete works on an object property so nothing will get deleted

```

Q3

Dynamically adding property to the object 

```javascript
const property = "firstName";
const name = "Jen";

const user = {
    [property]: name
};

console.log(user); // {firstName: 'Jen'}

```

Q4

Print the key- values pairs of an object.

```javascript
const user = {
    name:"Puja",
    age: 25
}

for(key in user){
    console.log(`${key}  - ${user[key]} `); // name  - Puja age  - 25 
}

```

Q5

Print the key- values pairs of an object.

```javascript

const obj = {
    b: "po"
    a:"one",
    b: "two",  
}
console.log(obj); // {b : 'two' , a: 'one'}

why ? Two key with same name will have the last value as it's current value

```

Q6

```javascript
const a ={};
const b= {key :"b"};
const c = {key : "c"};

a[b]= 123;
a[c]= 256;

console.log(a[b]); //256

```

why?

 when we assign a[b] = 123 it gets assigned as a["object Object"]= 123 again when we assign
 a[c]=256 it is a["object Object"]= 256;

 hence a[b]= 256


Q7 difference b/w JSON.parse v/s JSON.stringify

- JSON is a general format to represent values and objects.

- ```JSON.stringify``` is used to to convert objects into JSON.

- ```JSON.parse``` to convert JSON back into an object.

### JSON.stringify

```javascript

let student = {
  name: 'Jen',
  age: 20,
  isAdmin: false,
  courses: ['js', 'react'],
  spouse: null
};

console.log(JSON.stringify(student)); '{"name":"Jen","age":20,"isAdmin":false,"courses":["js","react"],"spouse":null}'
```

In the output if you see

- ```name:'Jen'``` --> ```name:"Jen"``` see double quotes in case of string no single quotes or backticks
- ```age: 20``` --> ```"age":20``` number is a number in JSON
- ```isAdmin: false``` --> ```"isAdmin":false``` no change
- ```courses: ['js', 'react']``` --> ```"courses": ["js", "react"]``` array items are in double quotes

Some properties are rejected by ```JSON.stringify```

- Function properties (methods).
- Symbolic keys and values.
- Properties that store undefined.


```javascript
let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log(JSON.stringify(user)); // '{}'
```

## Nested objects using JSON.stringify

```javascript
let user = {
  name:"jen",
  school:{
      city:"Delhi",
      name: "DPS"
  }
};

console.log(JSON.stringify(user)); // '{"name":"jen","school":{"city":"Delhi","name":"DPS"}}
```

limitation : circular structure cannot be converted to JSON
 example :  

```javascript
 let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // ERROR
```

### JSON.parse


```javascript
let numbers = "[0,2,5]";
console.log(JSON.parse(numbers)); // [0,2,5]

```

Q7

```javascript
console.log([..."hello"]); // ['h', 'e', 'l', 'l', 'o']

```

Q8

```javascript

const user = {name : "Po", age: 20};
const admin = {admin : true, ...user};

console.log(admin); // {admin: true, name: 'Po', age: 20}
```

Q9

```javascript

const user = {name : "Po", age: 20, admin: false};

console.log(JSON.stringify(user,["age","admin"])); // {"age":20,"admin":false}

```

why? 

The syntax for ```JSON.stringify``` is below and we added replacer which says to stringify only the properties that are mentioned in the replacer.

```let json = JSON.stringify(value[, replacer, space])```



Q10

```javascript
const user = {
name : "Po", 
age: 25,
displayAge(){
 return this.age;
 }
 displayName : () => this.name;
 }

 console.log(user.displayAge()); // 25
 console.log(user.displayName()); // won't display because it points to window object
```

Q11

```javascript
let user = {
name : "Po", 
age: 25,
fullName : {
  name:"PO1",
  last : "lotus"
}
}

const name = "Pi";

const {fullName: {name : fname}}= user;
console.log(fname); // PO1

const {name: firstName} = user;
console.log(firstName); // Po
console.log(name); // Pi
```

Q12

rest parameter will be there in the last of the arguments.

```javascript
function getItems(fruitList,favouriteList, ...args){
  return [...fruitList,...args,favouriteList]
}

console.log(getItems(["🍎 ","🍊"],"🍐"," 🍌 ","🍅 ")); // ['🍎 ', '🍊', ' 🍌 ', '🍅 ', '🍐']
```

Q13

## Object Referencing

```javascript
let c = {greeting : "hey"}
let d= c;
c.greeting = "Bye";
console.log(d.greeting); //Bye
```

Q14

## Object Referencing

```javascript
console.log({a:1} == {a:1}); // false
console.log({a:1} === {a:1}); // false
```

They point to differentr object in memory space hence they are not equal


Q15

## Object Referencing

```javascript
let person ={name : "lia"},
const members = [person];
person = null;

console.log(members);// {name : "lia"}
```

Q16

## Object Referencing

```javascript

const value={number :10};

const multiply = (x={...value})=>{
  console.log(x.number*=2);
}
multiply(); //20 x => {number:10}
multiply(); //20 x => {number:10}
multiply(value); //20 x => {number:10}
multiply(value);//40 x => {number:20}
```

Q17

## Object Referencing

```javascript

function changeAgeAndReference(person){
  person.age = 30;
  person = {
    name : "Po",
    age :40
  }
return person;
}

const personObj1={
  name: "Heli",
  age: 20
}

const personObj2= changeAgeAndReference(personObj1);

console.log(personObj1); //{name: 'Heli', age: 30}

console.log(personObj2); // {name: 'Po', age: 40} Here the reference to the whole object is changed than what is passed as an argument to the function
```

Q18 Difference b/w shallow copy v/s deep copy.

- A variable assigned an object stores the reference to the object not the object itself.

- when we copy an object we copy the reference to the object. Meaning the same door has two keys now to be accessed.

### Comparison

```javascript
const a={};

const b=a;

console.log(a == b); // true variable reference to same object.
console.log(a === b); // true

const c= {};
const d = {};

console.log(c == d); //false ; independent object though look alike different references
console.log( c===d); // false

```

### Gotcha

- const objects can be modified

```javascript
const user = {
  user : "puja",
  age:20
}

user.age =10;

console.log(user); //{user: 'puja', age: 10}

```

### How to duplicate an object?

```javaScript
const user = {
  user : "puja",
  age:20
}

const clone= {};

for(key in user){
clone[key]= user[key];
}
console.log(clone);

clone.age = 80;

console.log(clone); // {user: 'puja', age: 80}
console.log(user); //{user: 'puja', age: 20} // no effect on the original object

```

```Object.assign``` is used to clone an object

We can merge many objects into one object.

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2); //user = { name: "John", canView: true, canEdit: true }
```
- Object properties get overwritten if having same name.

```javascript
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // {name:"Pete"}
```

### Deep copy (Nested Objects)

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);
let clone1 = Object.assign({}, user);

console.log( user.sizes === clone.sizes );// false
console.log(clone1.sizes === user.sizes);



```
In case of an object having object inside we need to copy the whole object as well.

The call structuredClone(object) clones the object with all nested properties.

Q19 three ways to clone an object

- Object.assign

```javascript
const user = {
  name: "Puja",
  age:55
}
const clone = Object.assign({},user);
console.log(clone); // it won't change user
```

- using JSON.parse(JSON.stringify(obj))


```javascript
const user = {
  name: "Puja",
  age:55
}
const clone = JSON.parse(JSON.stringify(user));
console.log(clone); // it won't change user
```

- using spread operator

```
const clone = {...user};
console.log(clone);
```
