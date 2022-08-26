
## Arrow Functions

```javascript
let sum = (a, b) => a + b;


```


- They require no "this"

They access "this" from outside.

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
    return this.dev
  },
  b() {
    return this.dev
  },
  c: () => {
    return this.dev
  },
  d: function() {
    return (() => {
      return this.dev
    })()
  },
  e: function() {
    return this.b()
  },
  f: function() {
    return this.b
  },
  g: function() {
    return this.c()
  },
  h: function() {
    return this.c
  },
  i: function() {
    return () => {
      return this.dev
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
```