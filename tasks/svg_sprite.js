'use strict';

module.exports = function (grunt) {
  grunt.config(
    'svg_sprite', {
    basic: {
      expand: true,
      src: ['img/svg-sprites/*.svg'],
      dest: './',
      options: {
        mode: {
          css: {
            render: {
              css: true
            }
          }
        },
        shape: {
          spacing: {
            padding: 10
          },
        }
      }
    }
  });
};
