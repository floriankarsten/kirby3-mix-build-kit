let kirby = require('./kirby.config.js');

module.exports = {
	purge: {
		// mode 'layers' with ['base', 'components', 'utilities'] will be new default in future tailwind it is same like setting purgeLayersByDefault: true
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