module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "",
  assetsDir: "assets",
  runtimeCompiler: true,
  filenameHashing: false,

  css: {
    sourceMap: true
  },

  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
