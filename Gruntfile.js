module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			target: {
				files: {
					'./public/dist.min.css': ['./public/reset.css', './public/style.css', './public/animate.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
