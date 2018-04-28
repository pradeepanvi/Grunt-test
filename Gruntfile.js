module.exports = function(grunt){
    //Project congi
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: {
                'css/style.css': 'scss/*.scss',
              }
            }
          },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'output.css': ['style.css'],
            }
          }
        },
        watch: {
          css: {
            files: 'scss/*.scss',
            task:['sass']
          }
        }

    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

}