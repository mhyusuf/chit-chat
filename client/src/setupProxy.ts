import { AnySoaRecord } from "dns";

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app: any) => {
  app.use(
    ["/api", "/auth"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
