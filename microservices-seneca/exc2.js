'use strict'

const seneca = require('./math')

seneca.act ({role:'math', cmd: 'sum', left: parseInt(process.argv[2], 10), right: parseInt(process.argv[3], 10)}, (err, result) => {
	if(err)  return console.err(err)
	console.log(result)
})

module.exports = seneca