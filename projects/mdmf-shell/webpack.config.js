const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        profile: "profile@http://localhost:4201/remoteEntry.js}",
      },
      shared: {
        "@angular/core": {
          eager: true,
          singleton: true,
          requiredVersion: "~12.2.0",
        },
        "@angular/common": {
          eager: true,
          singleton: true,
          requiredVersion: "~12.2.0",
        },
        "@angular/router": {
          eager: true,
          singleton: true,
          requiredVersion: "~12.2.0",
        },
        "@ngxs/store": {
          singleton: true,
          eager: true,
          requiredVersion: "^3.7.2",
        },
      },
    }),
  ],
};
