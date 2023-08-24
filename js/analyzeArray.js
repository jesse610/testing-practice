export const analyzeArray = (arr) => {
    const calculateAvg = (arr) => {
        return arr.reduce((pv, cv) => pv + cv, 0) / arr.length
    }

    const calculateMinMax = (arr, minOrMax) => {
        const sortedArr = arr.sort((a, b) => a - b)
        return minOrMax === 'min' ? sortedArr[0] : sortedArr[arr.length - 1]
    }

    const calculateLength = (arr) => {
        return arr.length
    }

    return {average: calculateAvg(arr),
            min: calculateMinMax(arr, 'min'),
            max: calculateMinMax(arr, 'max'),
            length: calculateLength(arr)
    }
}

let ar = [1,8,3,4,2,6]

console.log(analyzeArray(ar))