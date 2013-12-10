var fs = require('fs');
var dust = require('dustjs-linkedin');
fs.readFile('list.template', 'utf8', function(err, data) {
	if(err) throw err;
	var compiled = dust.compile(data, "intro");
	fs.writeFile('compiled_template.js', compiled, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('template successfully compiled');
		}
	});
});
