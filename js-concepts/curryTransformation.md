### How to implement currying to a normal function ?


Transforming sum(1,2,3) ---> sum(1)(2)(3)


```javascript

function curry(fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this,args)
    }else{
      return function(...args2){
        return curried.apply(this,args.concat(args2))
      }
    }
  }
}


const sum =(a,b,c)=> a+b+c;

const curried = curry(sum);

console.log(curried(1)(2)(3)); //6

```

