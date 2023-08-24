import { reverseString } from "../reverseString";

test('apple to equal elppa', () => {
    expect(reverseString('apple')).toBe('elppa') 
})

test('The to equal ehT', () => {
    expect(reverseString('The')).toBe('ehT')
})

test('apple banana smoothie to equal eihtooms ananab elppa', () => {
    expect(reverseString('apple banana smoothie')).toBe('eihtooms ananab elppa')
})