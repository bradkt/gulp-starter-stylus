## gulp-starter-stylus

Starter Gulp + Browserify project with examples of how to accomplish some common tasks and workflows. The code is mostly based on the [gulp-starter](https://github.com/greypants/gulp-starter) project, currently my only changes are to replace the use of SASS with Stylus due to personal preferences :)

Read the original [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context, and check out the [Wiki](https://github.com/greypants/gulp-starter/wiki) for some good background knowledge.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [Stylus](http://learnboost.github.io/stylus/) (with the [Nib](http://tj.github.io/nib/) extension library, [source maps](https://github.com/floridoo/gulp-sourcemaps) and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [jQuery](http://jquery.com/) (from npm)
- [Backbone](http://backbonejs.org/) (from npm)
- [Handlebars](http://handlebarsjs.com/) (as a backbone dependency)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)


### Installation

If you've never used Node or npm before, you'll need to install Node. If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```


### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.


### Run gulp and be amazed.

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:

- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'stylus', 'images', 'markup']`


### Configuration

All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.
