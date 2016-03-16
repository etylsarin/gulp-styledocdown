var path = require('path'),
	gutil = require('gulp-util'),
	through = require('through2'),
	oAssign = require('object-assign'),
	sdd = require('styledocdown');

module.exports = function (options) {
	var defaults = {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-styledocdown', 'Streaming not supported'));
			return;
		}

		defaults.root = path.dirname(file.path) + '/';
		options = oAssign({}, defaults, options || {});

		sdd(file.contents.toString(), options, function (err, data) {
			if (err) {
				cb(new gutil.PluginError('gulp-styledocdown', err, {fileName: file.path}));
				return;
			}

			file.contents = new Buffer(data);
			file.path += '.md';

			cb(null, file);
		});
	});
};
