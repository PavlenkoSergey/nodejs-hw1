function isValidString (arr) {
    return isValidLength(arr) && isValidElements(arr)
}

function isValidLength (arr) {
    const length = arr.length
    if (length < 3 ) return false
    return !!(length % 2)
}

function isValidElements (arr) {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i]
        if (i === 0 || !(i % 2)) {
            if (isNumber(el)) continue
            return false
        }
        if (isOperator(el)) continue
        return false
    }
    return true
}

function isNumber(value) {
    if ((undefined === value) || (null === value)) return false
    if (typeof value == 'number') return true
    return !isNaN(value - 0)
}

function isOperator (value) {
    const operationTypes = ['add', 'div', 'sub', 'mult']
    return operationTypes.includes(value)
}

module.exports = isValidString