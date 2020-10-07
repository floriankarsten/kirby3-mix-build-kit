module.exports = {
	// name of main folder that you can deploy
	appFolder: "app",

	// name of public (webroot) folder if you use one (empty for folder ./app as a root)
	publicFolder: "public",

	// url to browsersync proxy (depending on your webserver it could be localhost or some domain like project.dev)
	proxy: "localhost",

	// source files to build
	source: {
		js: 'src/js/main.js',
		css: 'src/css/style.css'
	},

	deploy: {
		destination: 'fka:/var/www/test',
		exclude: ['.git', '.gitignore', '.DS_Store', 'composer.json']
	},
	files: {
		// this affects both purge css and live reloading you might want to add your custom plugins
		templates: [
			`./${this.appFolder}/site/templates/*.php`,
			`./${this.appFolder}/site/templates/**/*.php`,
			`./${this.appFolder}/site/snippets/*.php`,
			`./${this.appFolder}/site/snippets/**/*.php`,
		],
	}

}