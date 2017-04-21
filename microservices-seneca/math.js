'use strict'

const seneca = require('seneca')()

seneca.add ({role:'math', cmd: 'sum'}, (req, res) => {
	const sum = req.left + req.right
	res(null, {answer: sum})
})

module.exports = seneca