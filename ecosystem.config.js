module.exports = {
  apps : [{
    name: 'app',
    script: 'dist/server.js',
    watch: false,
    env: {
      PORT: 8080
    }
  }]
};