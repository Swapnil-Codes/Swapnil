module.exports = function (grunt) {

    //configuration
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/styles.css'

            }
        }

    });

    //load plugins
    //grunt.loadNpmTasks('');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    grunt.registerTask('concat-all', ['concat:css','concat:js']);


} 