module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {},
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['main.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/',
                    ext: '.min.js'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.min.html': 'index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'htmlmin']);
};