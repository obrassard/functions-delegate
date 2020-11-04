import 'jest-extended';
import { FunctionDelegate } from '../src/FunctionDelegate';

let calls: number[];

describe('ActionDelegate class test', () => {

    let delegate: FunctionDelegate;

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
        delegate = new FunctionDelegate();
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

    it('invoke() return type should be an array containing every functions return value', () => {
        expect(delegate.invoke('test')).toBeArrayOfSize(3)
        expect(delegate.invoke('test')).toEqual([1,3,2])
    })

    it('asFunction() should return a function which trigger every registered function', () => {
        let func = delegate.asFunction();
        expect(func).toBeFunction();
        expect(func()).toEqual([1,3,2])
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
        let d = new FunctionDelegate();
        let testFunc1 = (a: string) => {
            return a + "1"
        }

        let testFunc2 = (b: string) => {
            return b + "2"
        }

        let f = d.add(testFunc1).add(testFunc2).asFunction()
        expect(f("test")).toEqual(["test1","test2"])
    })
})