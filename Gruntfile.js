module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8888,
          keepalive: true,
          hostname: "*"
        },
      },
    },

    uglify: {
      main: {
        files: {
          './dist/page1.js': [
            'libs/zepto.js',
            'src/page1.js',
          ],
          './dist/page2.js': [
            'libs/zepto.js',
            'src/page2.js',
          ],
          './dist/page3.js': [
            'libs/zepto.js',
            'src/page3.js',
          ]
        }
      }
    },

    cssmin: {
      main: {
        files: {
          './dist/css/page1.css': ['css/base.css', 'css/page1.css'],
          './dist/css/page2.css': ['css/base.css', 'css/page2.css'],
          './dist/css/page3.css': ['css/base.css', 'css/page3.css']
        }
      }
    },

    copy: {
        images: {
            files: [
                {expand: true, src: ['css/*'], dest: 'dist/', filter: 'isFile'},
                {src: ['*.html'], dest: 'dist/'}
            ]
        }
    },

    clean : ['./dist/']
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['connect:server']);
  grunt.registerTask('build', ['clean', 'copy:images', 'cssmin:main', 'uglify:main']);

};