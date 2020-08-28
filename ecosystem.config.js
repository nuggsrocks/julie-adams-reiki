module.exports = {
	apps : [
	{
		name: 'reiki',
		script: './server.js',
		watch: 'src',
		env: {
			PORT: 8080
		},
		env_https: {
			PORT: 3010
		}
	}
	]
}