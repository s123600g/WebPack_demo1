const path = require("path");

module.exports = {
  // 設置主要Root js
  entry: "./static/js/index.js",
  // 設置封裝後輸出位置與檔案名稱
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
