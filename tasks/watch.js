'use strict';

module.exports = function (grunt) {
  grunt.config(
    'watch', {
    css: {
      files: ['src/css/*.css'],
      tasks: ['cssmin'],
      options: {
        livereload: true,
      }
    }
  });
};
