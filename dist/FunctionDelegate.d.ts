import { Delegate } from './Delegate';
declare type DelegateFunction = (...args: any[]) => any;
export declare class FunctionDelegate extends Delegate {
    /**
     * Create a new ActionDelegate instance
     */
    constructor();
    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add
     */
    add(f: DelegateFunction): FunctionDelegate;
    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove
     */
    remove(f: DelegateFunction): FunctionDelegate;
    /**
     * Returns a function that can be called to invoke this delegate
     * The function call returns an array containing each registered functions return values.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    asFunction(): DelegateFunction;
    /**
     * Invoke this delegate with the given arguments.
     * Returns an array containing each registered functions return values.
     * @param args delegated functions args
     */
    invoke(...args: any[]): any[];
}
export {};
