var bower_d = 'bower_components/';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        css: {
            files: 'estilos/scss/*.scss',
            tasks: ['sass','cssmin','concat']
        },
        scripts: {
            files: 'js/main.js',
            tasks: ['concat']
        }
    },
    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
          'estilos/css/styles.css': 'estilos/scss/styles.scss'
  			}
  		}
  	},
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'estilos/css/styles.min.css': ['estilos/css/styles.css']
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      basic_and_extras: {
        files: {
            'js/scripts.js': [
                bower_d+'jquery/dist/jquery.min.js',
                bower_d+'bootstrap/dist/js/bootstrap.min.js',
                'libs/fancyBox/lib/jquery.mousewheel-3.0.6.pack.js',
                'libs/fancyBox/source/jquery.fancybox.pack.js',
                'js/main.js'
            ],
            'estilos/all.css': [
                bower_d+'bootstrap/dist/css/bootstrap.min.css',
                'libs/fancyBox/source/jquery.fancybox.css'
            ]
        },
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
