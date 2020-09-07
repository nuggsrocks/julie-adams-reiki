module.exports = {
	apps : [
	{
		name: 'reiki',
		script: './server.js',
		watch: 'src',
		env: {
			HOST: 'localhost',
			PORT: 8080
		},
		env_localServer: {
			HOST: '192.168.1.15',
			PORT: 8080
		},
		env_https: {
			PORT: 3010
		}
	}
	]
}