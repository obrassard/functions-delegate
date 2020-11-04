# functions-delegate

This package, inspired by C# multicast delegation system, allow dynamic mapping of several
functions/methods inside a single "delegate" object which can later be invoked or passed as a function.

### How to use ?

```ts
import { ActionDelegate } from './ActionDelegate';

let delegate = new ActionDelegate();

let f1 = (a:string) => {
    console.log(`Hello ${a} from 1`);
}

function f2(a:string) {
    console.log(`Hello ${a} from 2`);
}

let f3 = function (a:string) {
    console.log(`Hello ${a} from 3`);
}

let action = delegate.add(f1).add(f3).add(f2).asFunction();
action('Bob');

console.log('Removing f1');
delegate.remove(f1);
delegate.invoke('Roger') //or action('Roger');
```

Prints :
```
Hello Bob from 1
Hello Bob from 3
Hello Bob from 2
Removing f1
Hello Roger from 3
Hello Roger from 2
```

***

## Methods details

### add(f:DelegateFunction): ActionDelegate

Adds (register) a given function or method to this delegate

### remove(f:DelegateFunction): ActionDelegate

Remove (unregister) a given function or method of this delegate

### invoke(...args: any[]): DelegateFunction

Invoke this delegate with the given arguments

> Call all registered functions with the given args

### asFunction(): DelegateFunction

Returns a function that can be called to invoke the delegate

Example : 

```ts
let action = new ActionDelegate().add(f1).add(f3).add(f2).asFunction();
action(`Bob`);

// Has the same result than
new ActionDelegate().add(f1).add(f3).add(f2).run('Bob');
```