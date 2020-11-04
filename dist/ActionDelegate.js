"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDelegate = void 0;
const Delegate_1 = require("./Delegate");
class ActionDelegate extends Delegate_1.Delegate {
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
     * ignoring all return types.
     * e.g. let action = delegate.asActionFunction();
     *      action(args);
     */
    asFunction() {
        return this.invoke.bind(this);
    }
    /**
     * Invoke this delegate with the given arguments.
     * Ignore all return types.
     * @param args delegated functions args
     */
    invoke(...args) {
        this.delegation.forEach(f => f(...args));
    }
}
exports.ActionDelegate = ActionDelegate;
