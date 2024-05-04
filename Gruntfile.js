module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            './dist/index.min.html': 'index.html'
          }
        }
      },
      less: {
        dist: {
          files: {
            './dist/main.css': 'src/main.less'
          }
        }
      },
      cssmin: {
        dist: {
          files: {
            './dist/main.min.css': 'dist/main.css'
          }
        }
      },
      uglify: {
        dist: {
          files: {
            './dist/main.min.js': 'src/main.js'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin', 'less', 'cssmin', 'uglify']);
    grunt.registerTask('build', ['default']);
  };
  