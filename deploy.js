// simple rsync script edit as you please

let Rsync = require('rsync');
let arguments = process.argv.slice(2);
let kirby = require('./kirby.config.js');

if (!arguments.includes('deploy') && !arguments.includes('content')) {
	throw 'You need to provide if to deploy or get content!';
}

let rsync = new Rsync();

rsync.output(
    function(data){
		// progress output
		console.log(data.toString('utf-8'));
    }, function(data) {
		// error output
		console.log(data.toString('utf-8'));
    }
);

rsync
	.set('no-perms')
	.set('no-times')
	.set('ignore-times')
	.shell('ssh')
	.progress()
	.flags('azLK');

if(arguments.includes('dry')) {
	console.log('DRY MODE');
	rsync.dry();
}

var exclude = [`${kirby.appFolder}/storage`, `media`];
if(kirby.deploy.exclude) {
	exclude = exclude.concat(kirby.deploy.exclude);
}

if(arguments.includes('deploy')) {
rsync
	.exclude(exclude)
	.source(`./${kirby.appFolder}/`)
	.destination(kirby.deploy.destination);

}

if(arguments.includes('content')) {
	// only gets content
rsync
	.source(`${kirby.deploy.destination}/content/`)
	.destination(`./${kirby.appFolder}/content`);

}


// Execute the command
rsync.execute(function(error, code, cmd) {
	// we're done
	if(error) {
		console.log("Error!");
		console.log(error);
	}

	console.log("Final command we were running");
	console.log(cmd);

});