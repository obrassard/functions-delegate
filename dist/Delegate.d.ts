declare type DelegateFunction = (...args: any[]) => any;
export declare abstract class Delegate {
    protected delegation: DelegateFunction[];
    /**
     * Create a new ActionDelegate instance
     */
    constructor();
    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add
     */
    add(f: DelegateFunction): Delegate;
    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove
     */
    remove(f: DelegateFunction): Delegate;
    /**
     * Returns a function that can be called to invoke this delegate
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    abstract asFunction(): DelegateFunction;
    /**
     * Invoke this delegate with the given arguments.
     * @param args delegated functions args
     */
    abstract invoke(...args: any[]): any;
}
export {};
