let kirby = {
	// name of main folder that you can deploy
	appFolder: "app",

	// name of public (webroot) folder if you use one (empty for folder ./app as a root)
	publicFolder: "public",

	// url to browsersync proxy (depending on your webserver it could be localhost or some domain like project.local)
	proxy: "localhost",

	// source files to build
	source: {
		js: 'src/js/main.js',
		css: 'src/css/style.css'
	},

	deploy: {
		destination: 'fka:/var/www/100101.archi/htdocs',
		exclude: ['.git', '.gitignore', '.DS_Store', 'composer.json', 'content', 'storage'] // super important to have content and storage in here
	},
	files: {
		// this affects both purge css and live reloading you might want to add your custom plugins
		templates: [
			'site/templates/*.php',
			'site/templates/**/*.php',
			'site/snippets/*.php',
			'site/snippets/**/*.php',
		],

	}
};

// kirby.confing.js transforming & defaults
kirby.source.js = kirby.source.js || 'src/js/main.js';
kirby.source.css = kirby.source.css || 'src/css/style.css';
// transforming files appfolder
kirby.files.templates = kirby.files.templates.map((template) => `${kirby.appFolder}/${template}`);




module.exports = kirby;