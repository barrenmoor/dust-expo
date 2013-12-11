var fs = require('fs');
var dust = require('dustjs-linkedin');
var compiler = {
	items : [{
		template : 'booklist.dust',
		name : 'booklist',
		compiled : '_compiled_template.js'
	}, {
		template : 'addedit.dust',
		name : 'addedit',
		compiled : '_compiled_template.js'
	}],

	doCompile : function (template, name, compiledTemplate) {
		fs.readFile(template, 'utf8', function(err, data) {
			if(err) throw err;
			var compiled = dust.compile(data, name);
			fs.appendFile(compiledTemplate, compiled + "\r\n", function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log('template ' + template + ' successfully compiled');
				}
			});
		});
	},

	clean : function(compiledTemplate) {
		if(fs.existsSync(compiledTemplate)) {
			console.log(compiledTemplate + " exists. Now removing");
			fs.unlinkSync(compiledTemplate);
		}
	}
};

for(var i = 0; i < compiler.items.length; i++) {
	compiler.clean(compiler.items[i].compiled);
};

for(var i = 0; i < compiler.items.length; i++) {
	compiler.doCompile(compiler.items[i].template, compiler.items[i].name, compiler.items[i].compiled);
};
