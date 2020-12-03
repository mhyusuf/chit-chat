const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ["/api", "/admin"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
