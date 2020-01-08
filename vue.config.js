/*
 * @Author: amujoe
 * @Date: 2020-01-08 12:20:41
 * @Description: file content
 */
module.exports = {
  publicPath: './',
  assetsDir: "static", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  filenameHashing: false, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  productionSourceMap: process.env.NODE_ENV !== "production", // 正式环境不需要
};
