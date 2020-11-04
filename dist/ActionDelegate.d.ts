import { Delegate } from "./Delegate";
declare type DelegateFunction = (...args: any[]) => void;
export declare class ActionDelegate extends Delegate {
    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add
     */
    add(f: DelegateFunction): ActionDelegate;
    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove
     */
    remove(f: DelegateFunction): ActionDelegate;
    /**
     * Returns a function that can be called to invoke this delegate
     * ignoring all return types.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    asFunction(): DelegateFunction;
    /**
     * Invoke this delegate with the given arguments.
     * Ignore all return types.
     * @param args delegated functions args
     */
    invoke(...args: any[]): void;
}
export {};
