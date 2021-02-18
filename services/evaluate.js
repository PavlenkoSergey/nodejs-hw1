const { format } = require('mathjs')

function evaluateExpression (number1, operator, number2 ) {
    const doOperation = require(`../operations/${operator}`)
    const result = doOperation(parseFloat(number1), parseFloat(number2))
    return format(result, { precision: 14 })
}

function evaluateExpressions (arr) {
    const firstExpressionResult = evaluateExpression(arr[0], arr[1], arr[2])
    if (arr.length === 3) return firstExpressionResult
    const restExpression = arr.slice(3)
    return restExpression.reduce((prev, cur, i, array) => {
        if (i === 0 || !(i % 2)) return evaluateExpression(prev, cur, array[i + 1])
        return prev
    }, firstExpressionResult)
}

module.exports = evaluateExpressions