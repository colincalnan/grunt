'use strict';

module.exports = function (grunt) {
  grunt.config(
    'imagemin', {
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          expand: true,
          cwd: 'img/',
          src: ['**/*.jpg'],
          dest: 'img/compressed/',
          ext: '.jpg'
        }
      ]
    }
  });
};
