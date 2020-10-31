---
title: WebPack_demo1
tags: Github, webpack
description: webpack基本入門筆記範例
---

# 環境安裝
1. Npm init
```shell
npm init
```
2. webpack webpack-cli
```shell
npm install webpack webpack-cli
```

# 封裝指令
1. 使用 npx
```shell
npx webpack --config webpack.config.js
```
2. 使用 npm
```shell
npm run build
```
需要再`package.json`內`scripts`設置以下指令配置
```json
"build": "webpack --config webpack.config.js"
```

# 基本設置
* `dist/` 放置封裝後主進入點js目錄
    - `index.bundle.js` 封裝後主進入點js，在home.html主要匯入此單一js
* `static/js`  放置js
    - `index.js` 作為封裝進入點js，裡面專門放置匯入其他用到js檔案。
* `webpack.config.js` webpack封裝設定檔，配置封裝前來源主進入點js與封裝後主進入點js輸出

# 參考資源
1. [Getting Started](https://webpack.js.org/guides/getting-started/#basic-setup)
2. [Webpack教學 (一) ：什麼是Webpack? 能吃嗎？](https://medium.com/i-am-mike/%E4%BB%80%E9%BA%BC%E6%98%AFwebpack-%E4%BD%A0%E9%9C%80%E8%A6%81webpack%E5%97%8E-2d8f9658241d)
3. [Webpack Tutorial 繁體中文 Gitbook](https://neighborhood999.github.io/webpack-tutorial-gitbook/)

