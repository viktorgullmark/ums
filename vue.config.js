const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/components/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
      },
    },
  },
};
