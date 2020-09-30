let kirby = require('./kirby.config.js');

module.exports = {
	purge: [
        `./${kirby.projectFolder}/site/templates/*.php`,
        `./${kirby.projectFolder}/site/templates/**/*.php`,
        `./${kirby.projectFolder}/site/snippets/*.php`,
        `./${kirby.projectFolder}/site/snippets/**/*.php`,
	],
	theme: {
		extend: {
		}
	}
}