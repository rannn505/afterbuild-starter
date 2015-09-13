AfterBuild-Starter
===

<div>
<p> <img height="50" width="50" src="https://raw.githubusercontent.com/rannn505/afterbuild-starter/master/assets/afterbuild-starter.png"> Automatically starts your Web app after build is over </p>
</div>

[![Version npm](https://img.shields.io/npm/v/afterbuild-starter.svg?style=flat-square)](https://www.npmjs.com/package/afterbuild-starter)[![NPM Downloads](https://img.shields.io/npm/dt/afterbuild-starter.svg?style=flat-square)](https://www.npmjs.com/package/afterbuild-starter)[![Dependencies](https://img.shields.io/david/rannn505/afterbuild-starter.svg?style=flat-square)](https://david-dm.org/rannn505/afterbuild-starter)


## Installation

```bash
$ npm install afterbuild-starter
```

## What's afterbuild-starter?

When the build process is over, afterbuild-starter will automatically:
- start a node process with your Web app
- open the browser with the url of your site

## Setting up

you can use `starter({path:"",url:""})` at any final callback of any build system.

starter({path:"",url:""}) takes 2 args:
- **path** - The path to the .js file containing the main node app (String)
- **url** - The url to your website (String) (Default:"http://localhost")

## Examples

####  With `gulpfile.js`:

```javascript
var starter = require('node-starter');

gulp.task('default', ['minify-html'], function(){

    starter({path:"Path/To/Your/main.js",url:"URL/to/your/site"});
});
```

####  With `Gruntfile.js`:

```javascript
var starter = require('node-starter');

grunt.registerTask('starter', function() {

   starter({path:"Path/To/Your/main.js",url:"URL/to/your/site"});
});

grunt.registerTask('default', ['yourTask1', 'yourTask2', 'starter']);
```

## License

  [MIT](LICENSE)



[![Analytics](https://ga-beacon.appspot.com/UA-67540608-1/rannn505/afterbuild-starter?pixel)](https://github.com/igrigorik/ga-beacon)

