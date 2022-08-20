
## Hoisting Interview questions

### Q1

```javascript
const a = 1
console.log(a) //1

var b
console.log(b) //undefined
b = 2

console.log(c); //undefined
var c = 3

console.log(d) // ReferenceError
let d = 2

```

### Q2

```javascript
const func1 = () => console.log(1)

func1(); //1

func2(); // 2

function func2() {
  console.log(2)
}


func3(); // TypeError: c3 is not a function

var func3 = function func4() {
  console.log(3)
}

```

### Q3 

```javascript

function func() {
  const a = b = c = 1;
}
func();
console.log(typeof a, typeof b, typeof c); //undefined number number

```

### Q4

```javascript

var a = 1

function func() {
  a = 2
  console.log(a); //2
  var a
}

func();

console.log(a);1

if (!('b' in window)) {
  var b = 1
}

console.log(b)// undefined
```

### Q5

```javascript

let foo = 10
function func1() {
    console.log(foo)// undefined
    var foo = 1
}
func1 ()


function func2() {
    console.log(foo) //ReferenceError
    let foo = 1
}
func2 ();
```

### Q6

```javascript

(() => {
  if (!fn) {
    function fn() {
      console.log('2') // 2
    }
  }
  fn()
})()

function fn() {
  console.log('1')
}

function fn1() {
  console.log('3')
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log('4'); //4
    }
  }
  fn1()
})()


(() => {
  if (false) {
    function fn3() {
      console.log('5')
    }
  }
  fn3(); // TypeError
})()

```

### Q7

```javascript

var foo = 1;
(function () {
  console.log(foo); //undefined
  foo = 2;
  console.log(window.foo); //1
  console.log(foo);//2
  var foo = 3;
  console.log(foo);//3
  console.log(window.foo); //1
})()
```