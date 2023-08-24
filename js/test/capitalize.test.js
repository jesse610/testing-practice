import { capitalize } from "../capitalize"

test('summer to equal Summer', () => {
    expect(capitalize('summer')).toBe('Summer')
})

test('wINTER to equal WINTER', () => {
    expect(capitalize('wINTER')).toBe('WINTER')
})