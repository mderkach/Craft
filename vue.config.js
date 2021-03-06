const webpack = require("webpack");

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "",
  assetsDir: "assets",
  runtimeCompiler: true,
  filenameHashing: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass"`
      }
    }
  },
  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  }
};
