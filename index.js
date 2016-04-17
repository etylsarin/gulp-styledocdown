var path = require('path'),
	gutil = require('gulp-util'),
	through = require('through2'),
	oAssign = require('object-assign'),
	sdd = require('styledocdown');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		var cfg = {
			root: path.dirname(file.path),
			fileName: path.basename(file.path)
		};

		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-styledocdown', 'Streaming not supported'));
			return;
		}

		if (typeof options === 'object') {
			cfg = oAssign(cfg, options);
		}

		sdd(file.contents.toString(), cfg, function (err, data) {
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
