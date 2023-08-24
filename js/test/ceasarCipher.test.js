import { ceasarCipher } from "../ceasarCipher";

test('abc to equal bcd', () => {
    expect(ceasarCipher('abc', 1)).toBe('bcd')
})

test('AbC to equal BcD', () => {
    expect(ceasarCipher('AbC', 1)).toBe('BcD')
})

test('Yellow to equal Agnnqy', () => {
    expect(ceasarCipher('Yellow', 2)).toBe('Agnnqy')
})

test('The end. to equal Uif foe.', () => {
    expect(ceasarCipher('The end.', 1)).toBe('Uif foe.')
})

test('Apple to equal Zookd', () => {
    expect(ceasarCipher('Apple', -1)).toBe('Zookd')
})

test('apple to equal zooked', () => {
    expect(ceasarCipher('apple', -1)).toBe('zookd')
})