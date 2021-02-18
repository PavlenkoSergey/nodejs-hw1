const getInput = require('./services/console')
const isValidString = require('./services/validation')
const evaluateExpressions = require('./services/evaluate')
const log = require('./services/file')

const input = getInput()


if (isValidString(input)) {
    const value = evaluateExpressions(input)
    log('result', value)
} else {
    log('error', 'Validation error')
}

