var bower_d = 'bower_components/';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
			css: {
				files: 'estilos/*.scss',
				tasks: ['sass','cssmin','concat']
			}
    },
    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'estilos/css/styles.css': 'estilos/styles.scss'
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
          ],
          'estilos/all.css': [
            bower_d+'bootstrap/dist/css/bootstrap.min.css'
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
