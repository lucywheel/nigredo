var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	template: {
		src: ['*.html', '!_*.html'],
		cwd: dev,
		dest: build,
		data: dev + '/data.json',
		utm: {
			source: 'autofunnels',
			medium: 'email',
			campaign: 'sever',
			term: 'newsletter',
			content: 'content'
		}
	},

	concatcss: {
		src: 'css/*.css',
		dest: dev,
		cwd: dev,
		allFile: 'css/styles.css'
	},

	images: {
		src: 'img/**',
		cwd: dev,
		dest: build + '/img'
	}

};
