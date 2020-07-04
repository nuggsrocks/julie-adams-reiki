module.exports = {
  apps : [{
    name: 'reiki',
    script: 'dist/server.js',
    watch: false,
    env: {
      PORT: 8080
    },
    env_https: {
      PORT: 3010
    }
  }]
};