import { describe, expect, test } from "vitest";
import { fibonacci } from "..";

describe('Fibonacci function', () => {
    test('Test case 1: I should enter a number and return n numbers in the sequence', () => {
        const ouput = fibonacci(5);
        expect(ouput).toBe('0 1 1 2 3');
    });

    test('Test case 2: I should enter a number out of range and return undefined', () => {
        const ouput = fibonacci(47);
        expect(ouput).toBe(undefined);
    });
});