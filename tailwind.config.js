let kirby = require('./kirby.config.js');

module.exports = {
	purge: {
		// this will be new default in future tailwind
		mode: 'layers',
		layers: ['base', 'components', 'utilities'],
		preserveHtmlElements: true,
		// change purge content in kirby.config.js
		content: [...kirby.files.templates],
	},
	theme: {
		extend: {
		}
	},
	// adding upcoming changes https://tailwindcss.com/docs/upcoming-changes
	future: {
		removeDeprecatedGapUtilities: true,
	},
}