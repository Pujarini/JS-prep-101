### Polyfill for call,apply and bind


## Polyfill for Call

- call takes a context and arguments
 
```javascript

Function.prototype.myCall=function(cxt={},...args){
    if(typeof this !== "function")
    throw new Error("Not called on a function")


   cxt.fn = this;
   cxt.fn(...args);
}

```

## Polyfill for Apply

- call takes a context and arguments as an arraylist
 
```javascript

Function.prototype.myApply=function(cxt={},args){
    if(typeof this !== "function")
    throw new Error("Not called on a function");

    if(!Array.isArray(args))
    throw new Error("args are not arrayList");


cxt.fn = this;
cxt.fn(...args);

}

```


## Polyfill for Bind

- Bind returns a function and takes a context and arguments
 
```javascript

Function.prototype.myBind1=function(cxt={},...args){
    if(typeof this !== "function")
    throw new Error("Not called on a function");
    cxt.fn = this;
    return function(...args2){
        return cxt.fn(...args,...args2);
    }
}


```
