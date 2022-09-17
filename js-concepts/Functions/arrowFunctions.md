# How Arrow functions work? 

## Arrow Functions

### Syntax : 

```javascript
let sum = (a, b) => a + b;

```

- Arrow functions have no ```this```.

- They take this from outer normal function.


```javascript

let user = {
  firstName: "jen",
  sayHi() { //outer normal function
    let arrow = () => alert(this.firstName); // arrow function
    arrow();
  }
};
user.sayHi(); // jen

```
Arrow function's outer normal function is sayHi() which has firstName.

```javascript
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
      const that = this
    this.students.forEach(function(student) {
      console.log(that.title + ': ' + student); // Here "this" is undefined
    });
  }
};

group.showList();// : John. : Pete : Alice
```
### Fix using arrow function

```javascript
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList(); // Our Group : John Our Group : Pete Our Group : Alice

```

Here this.title in it is exactly the same as in the outer method showList


## No Arguments

Arrow functions also have no arguments variable.


#To be solved

```javascript 

const obj = {
  dev: 'bfe',
  a: function() {
    return this.dev // bfe
  },
  b() {
    return this.dev // bfe
  },
  c: () => {
    return this.dev //undefined since it is an arrow function
  },
  d: function() {
    return (() => {
      return this.dev  // returns (return this.dev);
    })() 
    // bfe
  },
  e: function() {
    return this.b() // bfe
  },
  f: function() {
    return this.b //undefined this will return b function and then the this inside b is window object
  },
  g: function() {
    return this.c() // undefined since c is an arrow function.
  },
  h: function() {
    return this.c // undefined since c is an arrow function
  },
  i: function() {
    return () => {
      return this.dev // bfe first call it will return arrow function and then second call will return bfe
    }
  }
}

console.log(obj.a())
console.log(obj.b())
console.log(obj.c())
console.log(obj.d())
console.log(obj.e())
console.log(obj.f()())
console.log(obj.g())
console.log(obj.h()())
console.log(obj.i()())
