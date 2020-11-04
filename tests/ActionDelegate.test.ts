import 'jest-extended';
import { ActionDelegate } from '../src/ActionDelegate';

let calls: number[];

describe('ActionDelegate class test', () => {

    let delegate: ActionDelegate;

    let f1 = () => {
        calls.push(1);
        return 1
    }

    let f2 = () => {
        calls.push(2);
        return 2
    }
    
    let f3 = () => {
        calls.push(3);
        return 3
    }

    beforeAll(() => {

        delegate = new ActionDelegate();
        delegate.add(f1).add(f3).add(f2).asFunction();
    })

    beforeEach(() => {
        // Reset calls array
        calls = []
    })

    it('invoke() should invoke every regsitered function', () => {
        delegate.invoke('test');
        expect(calls).toEqual([1,3,2])
    })

    it('invoke() return type should be void', () => {
        expect(delegate.invoke('test')).toBeUndefined();
    })

    it('asFunction() should return a function which trigger every registered function', () => {
        let func = delegate.asFunction();
        expect(func).toBeFunction();
        expect(func()).toBeUndefined();
        expect(calls).toEqual([1,3,2])
    })

    it('add() should register a new function', () => {
        delegate.add(() => { calls.push(4) })
        delegate.invoke();
        expect(calls).toEqual([1,3,2,4])
    })

    it('remove() should unregister a function', () => {
        delegate.remove(f1)
        delegate.invoke();
        expect(calls).toEqual([3,2,4])
    })

    it('remove() should do nothing if a function was not previously registered', () => {
        delegate.remove(()=>{});
        delegate.invoke();
        expect(calls).toEqual([3,2,4])
    })

    it('invoke() should pass arguments to every function', () => {
        let d = new ActionDelegate();
        let testFunc1 = (a: string) => {
            expect(a).toBe('test1')
        }

        let testFunc2 = (b: string) => {
            expect(b).toBe('test1')
        }

        d.add(testFunc1).add(testFunc2).invoke('test1')
    })
})