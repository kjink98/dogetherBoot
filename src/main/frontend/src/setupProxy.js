const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    createProxyMiddleware(
      '/dog',
      {
        target: 'http://localhost:8080',
        changeOrigin: true
      })
  )
};