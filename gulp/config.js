var dest = "./build";
var src = './src';

module.exports = {

  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },

  stylus: {
    src: src + "/stylus/!(_)*.{styl,stylus}",
    dest: dest,
    settings: {
      errors: true,
      use: [ require('nib')() ]
    }
  },

  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },

  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/app.coffee',
      dest: dest,
      outputName: 'app.js'
    }, {
      entries: src + '/javascript/head.coffee',
      dest: dest,
      outputName: 'head.js'
    }]
  }
  
};
