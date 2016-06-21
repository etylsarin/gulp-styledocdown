# gulp-styledocdown
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> [styledocdown](https://github.com/etylsarin/styledocdown) plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-styledocdown` as a development dependency:

```shell
npm install --save-dev gulp-styledocdown
```

Then, add it to your `gulpfile.js`:

```javascript
var styledocdown = require("gulp-styledocdown");

gulp.src("./src/*.ext")
	.pipe(styledocdown({
		root: "root/folder/for/relatively/linked/files/"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### styledocdown(options)

#### options.root
Type: `String`  
Default: File directory

Set the location where the linked files are hosted.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-styledocdown
[npm-image]: https://badge.fury.io/js/gulp-styledocdown.png

[travis-url]: http://travis-ci.org/etylsarin/gulp-styledocdown
[travis-image]: https://secure.travis-ci.org/etylsarin/gulp-styledocdown.png?branch=master
