let kirby = require('./kirby.config.js');

module.exports = {
	purge: {
		// change purge content in kirby.config.js
		content: [...kirby.files.templates],
		options: {
			// you can safelist stuffz here
			safelist: []
		}
	},
	theme: {
		extend: {
		}
	},
}