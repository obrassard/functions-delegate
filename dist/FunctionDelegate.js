"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionDelegate = void 0;
const Delegate_1 = require("./Delegate");
class FunctionDelegate extends Delegate_1.Delegate {
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
    add(f) {
        super.add(f);
        return this;
    }
    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove
     */
    remove(f) {
        super.remove(f);
        return this;
    }
    /**
     * Returns a function that can be called to invoke this delegate
     * The function call returns an array containing each registered functions return values.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    asFunction() {
        return this.invoke.bind(this);
    }
    /**
     * Invoke this delegate with the given arguments.
     * Returns an array containing each registered functions return values.
     * @param args delegated functions args
     */
    invoke(...args) {
        let returns = [];
        this.delegation.forEach(f => {
            returns.push(f(...args));
        });
        return returns;
    }
}
exports.FunctionDelegate = FunctionDelegate;
