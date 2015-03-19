module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    bower: {
      install: {
        options: {
          targetDir: 'ex4_grunt/vendor/bower_components',
          layout: 'byComponent',
          verbose: true,
          cleanup: true
        }
      }
    },
    browserify: {
      app: {
        files: {
          'ex4_grunt/bundle.js': [
            'ex4_grunt/main.js'
          ],
        },
        options: {
          transform: ['hbsfy']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['bower', 'browserify']);

};
