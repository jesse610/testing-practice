export const calculator = {
    add: function(...numbers) {
        return numbers.reduce((ac, cv) => ac + cv, 0)
    },
    subtract: function(...numbers) {
        return numbers.reduce((ac, cv) => ac - cv)
    },
    multiply: function(...numbers) {
        return numbers.reduce((ac, cv) => ac * cv)
    },
    divide: function(...numbers) {
        return Number(numbers.reduce((ac, cv) => ac / cv).toFixed(2))
    }
}