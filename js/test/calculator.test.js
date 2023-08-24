import { calculator } from "../calculator";

// addition test
xtest('1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

xtest('1 + 2 + 3 to equal 6', () => {
    expect(calculator.add(1, 2, 3)).toBe(6)
})

// subtraction tests
xtest('10 - 5 equals 5', () => {
    expect(calculator.subtract(10, 5)).toBe(5)
})

xtest('-50 - 10 equals -60', () => {
    expect(calculator.subtract(-50, 10)).toBe(-60)
})

xtest('5 - 10 - 50 equals -55', () => {
    expect(calculator.subtract(5, 10, 50)).toBe(-55)
})

// multiplcation tests
xtest('1 * 5 equals 5', () => {
    expect(calculator.multiply(1, 5)).toBe(5)
})

xtest('0 * 5 equals 0', () => {
    expect(calculator.multiply(0, 5)).toBe(0)
})

xtest('5 * 2 * -10 equals -100', () => {
    expect(calculator.multiply(5, 2, -10)).toBe(-100)
})

// division tests
test('10 / 2 equals 5', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('2 / 4 equals 0.5', () => {
    expect(calculator.divide(2, 4)).toBe(0.5)
})

test('2 / 3 equals 0.67', () => {
    expect(calculator.divide(2, 3)).toBe(0.67)
})