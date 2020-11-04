# functions-delegate

This package, inspired by C# multicast delegation system, allow dynamic mapping of several functions/methods inside a single 'delegate' object which can later be invoked or passed as a function.

## Getting started

```
npm i functions-delegate
```

```js
import { ActionDelegate } from "functions-delegate";
import { FunctionDelegate } from "functions-delegate";
```

## `ActionDelegate` vs `FunctionDelegate`

Both `ActionDelegate` and `FunctionDelegate` share the same interface.
However, the main difference between the two classes is the return type of the invocation method.

`ActionDelegate` ignores the return value of the registered functions. In other words `actionDelegate.invoke(..)` is void.
`FunctionDelegate`, however, will return an array containing every return value of the called functions.

See bellow for further details.

## Usage

### ActionDelegate

```ts
import { ActionDelegate } from "functions-delegate";

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

Would prints :
```
Hello Bob from 1
Hello Bob from 3
Hello Bob from 2
Removing f1
Hello Roger from 3
Hello Roger from 2
```

### FunctionDelegate

```ts
import { FunctionDelegate } from "functions-delegate";

let delegate = new FunctionDelegate();

let f1 = (a:string) => {
    return `Hello ${a} from 1`;
}

let f2 = (a:string) => {
    return `Hello ${a} from 2`;
}

let action = delegate.add(f2).add(f1).asFunction();
let results = action('Bob'); //or delegate.invoke('Bob')

console.log(results)
```

Would prints :
```
['Hello Bob from 2', 'Hello Bob from 1']
```

***

## Interface details

### `add(f:DelegateFunction): Delegate`

Adds (register) a given function / method to this delegate

### `remove(f:DelegateFunction): Delegate`

Remove (unregister) a given function / method of this delegate

### `invoke(...args: any[]): void | any[]`

Invoke this delegate with the given arguments

> Calls all registered functions with the given arguments

This method is `void` for `ActionDelegate`, and returns an array of result (`any[]`) for `FunctionDelegate`

### `asFunction(): DelegateFunction`

Returns a function that can be called later to `invoke` the delegate

Example : 

```ts
let action = new ActionDelegate().add(f1).add(f3).add(f2).asFunction();
action(`Bob`);

// Has the same result than
new ActionDelegate().add(f1).add(f3).add(f2).invoke('Bob');
```

