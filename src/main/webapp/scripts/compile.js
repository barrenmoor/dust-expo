var fs = require('fs');
var dust = require('dustjs-linkedin');
fs.readFile('booklist.dust', 'utf8', function(err, data) {
	if(err) throw err;
	var compiled = dust.compile(data, "intro");
	fs.writeFile('_booklist.js', compiled, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('template successfully compiled');
		}
	});
});
