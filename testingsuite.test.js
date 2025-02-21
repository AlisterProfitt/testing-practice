const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarcipher');
const analyzeArray = require('./analyzeArray');

test('capitalizes first letter', () => {
    expect(capitalize('word')).toBe('Word');
})

test('capitalizes first letter again', () => {
    expect(capitalize('works')).toBe('Works');
})

test('string to be reversed', () => {
    expect(reverseString('parameters')).toBe('sretemarap');
})

describe('calculator operations', () => {
    test('add 2 numbers', () => {
        expect(calculator.add(3, 2)).toBe(5);
    })
    
    test('subtract 2 numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    })
    
    test('multiply 2 numbers', () => {
        expect(calculator.multiply(3, 8)).toBe(24);
    })
    
    test('divide 2 numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    })
})

test('caesar cipher shift', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('works with negative shift', () => {
    expect(caesarCipher('def', -1)).toBe('cde');
})


describe('testing suite for array analysis', () => {
    test("works with single element array", () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1,
        });
    });

    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    test('array average', () => {
        expect(object.average).toBe(4);
    })

    test('array minimum', () => {
        expect(object.min).toBe(1);
    })

    test('array maximum', () => {
        expect(object.max).toBe(8);
    })

    test('array length', () => {
        expect(object.length).toBe(6);
    })
})