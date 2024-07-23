import { describe, expect, test } from "vitest";
import { isNumberPerfect } from "..";

describe('Numero Perfecto function', () => {
    test('Test case 1: I should enter a number and return is not perfect', () => {
        const ouput = isNumberPerfect(5);
        expect(ouput).toBe('5 no es perfecto');
    });

    test('Test case 2: I should enter a number and return perfect', () => {
        const ouput = isNumberPerfect(6);
        expect(ouput).toBe('6 es perfecto');
    });

    test('Test case 3: I should enter a number out of range and return undefined', () => {
        const ouput = isNumberPerfect(101);
        expect(ouput).toBe(undefined);
    });
});