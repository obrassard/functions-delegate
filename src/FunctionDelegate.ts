import { Delegate } from './Delegate';

type DelegateFunction = (...args: any[]) => any;
export class FunctionDelegate extends Delegate {
    
    /**
     * Create a new ActionDelegate instance
     */
    constructor() {
        super();
    }

    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add 
     */
    public add(f: DelegateFunction): FunctionDelegate {
       super.add(f)
       return this;
    }

    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove 
     */
    public remove(f: DelegateFunction): FunctionDelegate {
        super.remove(f)
        return this;
    }

    /**
     * Returns a function that can be called to invoke this delegate
     * The function call returns an array containing each registered functions return values.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    public asFunction(): DelegateFunction {
        return this.invoke.bind(this);
    }

    /**
     * Invoke this delegate with the given arguments.
     * Returns an array containing each registered functions return values.
     * @param args delegated functions args
     */
    public invoke(...args: any[]): any[] {
        let returns: any[] = [];
        this.delegation.forEach(f => {
            returns.push(f(...args))
        })

        return returns;
    }
}