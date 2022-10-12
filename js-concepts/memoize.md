### How to memoize a function? 


```javascript

function myMemoize (fn,context){
 const resCache={};
    return function (...args){
      
      var res = JSON.stringify(args);
  
      if(!resCache[res]){
        console.log("calculating")
        resCache[res] = fn.call(context || this, ...args);
      }
       console.log("from cache");
      return resCache[res]; 
    }
}


const add =(a,b)=> a+b;

const memoize = myMemoize(add);

console.log(memoize(9,10));
console.log(memoize(9,10));

```

