module.exports = {
  transpileDependencies: ["vuetify"],
  assetsDir: "assets",
  runtimeCompiler: true,

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
