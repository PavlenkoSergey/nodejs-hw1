const { writeFile } = require("fs")

function log (type, message) {
    writeFile(`./logs/${type}.txt`, message, (error) => {
        if(error) throw error
        console.log(`${message}, ${type} was logged` )
    })
}

module.exports = log