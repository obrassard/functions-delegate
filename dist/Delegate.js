"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delegate = void 0;
class Delegate {
    /**
     * Create a new ActionDelegate instance
     */
    constructor() {
        this.delegation = [];
    }
    /**
     * Adds (register) a given function or method to this delegate
     * Notes : All functions registered to a same delegate, should have the same signature.
     * @param f The function to add
     */
    add(f) {
        this.delegation.push(f);
        return this;
    }
    /**
     * Remove (unregister) a given function or method of this delegate
     * @param f The function to remove
     */
    remove(f) {
        let i = this.delegation.indexOf(f);
        if (i !== -1) {
            this.delegation.splice(i, 1);
        }
        return this;
    }
}
exports.Delegate = Delegate;
