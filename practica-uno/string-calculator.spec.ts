import { add } from './string-calculator';

describe('StringCalculator', () => {
  it('empty -> 0', () => expect(add('')).toBe(0));
  it('single', () => expect(add('1')).toBe(1));
  it('two', () => expect(add('1,2')).toBe(3));
});