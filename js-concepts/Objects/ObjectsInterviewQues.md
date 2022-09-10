
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









