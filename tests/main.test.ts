import 'jest-extended';
import { Main } from '../src/main';

describe('Main class test', () => {
    it('should say hello', () => {
        expect(Main.sayHello()).toBe("Hello World")
    })
})