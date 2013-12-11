var fs = require('fs');
var dust = require('dustjs-linkedin');
var compiler = {
	items : [{
		template : 'booklist.dust',
		name : 'booklist',
		compiled : '_booklist.js'
	}, {
		template : 'addedit.dust',
		name : 'addedit',
		compiled : '_addedit.js'
	}],

	doCompile : function (template, name, compiledTemplate) {
		fs.readFile(template, 'utf8', function(err, data) {
			if(err) throw err;
			var compiled = dust.compile(data, name);
			fs.writeFile(compiledTemplate, compiled, function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log('template ' + template + ' successfully compiled');
				}
			});
		});
	}
};

for(var i = 0; i < compiler.items.length; i++) {
	compiler.doCompile(compiler.items[i].template, compiler.items[i].name, compiler.items[i].compiled);
};
