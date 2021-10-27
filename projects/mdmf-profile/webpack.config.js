const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "mdmfProfile",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "profile",
      library: { type: "var", name: "profile" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule:
          "./projects/mdmf-profile/src/app/profile/profile.module.ts",
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
        /*"mdmf-shared": {
          singleton: true,
          eager: true,
          requiredVersion: "^0.0.1",
        },*/
      },
    }),
  ],
};
