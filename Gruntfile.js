module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    build: {
	      src: ['js/paddle.js', 'js/vector.js', 'js/walls.js', 'js/ball.js', 'js/box.js'],
	      dest: 'build/scripts.js',
	    },
	  },
	  watch: {
	    css: {
	      files: 'css/**/*.less',
	      tasks: ['less:build', 'postcss'],
	      options: {
	        livereload: true,
	      },
	    },
	    js: {
	      files: 'js/**/*.js',
	      tasks: ['concat:js'],
	      options: {
	        livereload: true,
	      },
	    },
	  },
	  less: {
	    build: {
	      options: {
	        paths: ["css"]
	      },
	      files: {
	        "build/styles.css": "css/main.less"
	      }
	    },
	  },
	  postcss: {
	      options: {
	        map: true, // inline sourcemaps

	        processors: [
	          require('pixrem')(), // add fallbacks for rem units
	          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
	          require('cssnano')() // minify the result
	        ]
	      },
	      dist: {
	        src: 'build/*.css'
	      }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['watch']);
};