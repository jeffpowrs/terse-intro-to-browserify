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
          targetDir: 'vendor/',
          layout: 'byComponent',
          verbose: true,
          cleanup: true
        }
      }
    },
    browserify: {
      ex4: {
        files: {
          'ex4_grunt/bundle.js': [
            'ex4_grunt/main.js'
          ],
        },
        options: {
          transform: [
            'hbsfy',
            'browserify-shim'
          ]
        }
      },
      ex5: {
        files: {
          'ex5_bower/bundle.js': [
            'ex5_bower/main.js'
          ],
        },
        options: {
          transform: [
            'hbsfy',
            'browserify-shim'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['bower', 'browserify']);

};
