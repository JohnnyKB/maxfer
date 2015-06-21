module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass:dist'],
                options: {
                    spawn: false,
                },
            } 
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            } 
        },
        browserSync: {
            files: {
                src : [
                    '*.html',
                    'css/style.css'
                ],
            },
            options: {
              server: {
                baseDir: "./"
            }
        }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['browserSync', 'sass']);

};