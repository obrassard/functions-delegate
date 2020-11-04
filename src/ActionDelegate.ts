import { Delegate } from "./Delegate";

type DelegateFunction = (...args: any[]) => void;
export class ActionDelegate extends Delegate {

    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add 
     */
    public add(f: DelegateFunction): ActionDelegate {
        super.add(f)
        return this;
    }

    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove 
     */
    public remove(f: DelegateFunction): ActionDelegate {
        super.remove(f)
        return this;
    }

    /**
     * Returns a function that can be called to invoke this delegate
     * ignoring all return types.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    public asFunction(): DelegateFunction {
        return this.invoke.bind(this);
    }

    /**
     * Invoke this delegate with the given arguments.
     * Ignore all return types.
     * @param args delegated functions args
     */
    public invoke(...args: any[]): void {
        this.delegation.forEach(f => f(...args))
    }
}