/**
 * functions-delegate : Delegate.ts
 * Olivier Brassard
 * 2020-11-03
 */

type DelegateFunction = (...args: any[]) => any;

export abstract class Delegate {
    protected delegation: DelegateFunction[];

    /**
     * Create a new ActionDelegate instance
     */
    constructor() {
        this.delegation = []
    }

    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add 
     */
    public add(f: DelegateFunction): Delegate {
        this.delegation.push(f);
        return this;
    }

    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove 
     */
    public remove(f: DelegateFunction): Delegate {
        let i = this.delegation.indexOf(f)
        if (i !== -1) {
            this.delegation.splice(i, 1);
        }
        return this;
    }

    /**
     * Returns a function that can be called to invoke this delegate
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    public abstract asFunction(): DelegateFunction

    /**
     * Invoke this delegate with the given arguments.
     * @param args delegated functions args
     */
    public abstract invoke(...args: any[]): any
}