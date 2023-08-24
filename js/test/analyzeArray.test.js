import { analyzeArray } from "../analyzeArray";

test('average, min, max, length to equal 5, 1, 8, 6', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})