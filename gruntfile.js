module.exports = function(grunt) {
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-contrib-imagemin'],
    config: './package.json',
    scope: 'devDependencies'
  });

  grunt.registerTask('images', [], function () {
    require('load-grunt-tasks')(grunt, { pattern: ['grunt-contrib-imagemin'] });
    grunt.task.run('imagemin', 'imagemin');
  });

  // Load configuration
  grunt.task.loadTasks('tasks');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:assets', 'watch']);
}
