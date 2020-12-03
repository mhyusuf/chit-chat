import createProxyMiddleware from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    ["/api", "/admin"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
