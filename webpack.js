const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Progressive Budget App",
      short_name: "Budget App",
      description: "An application for tracking expenses",
      background_color: "#dddddd",
      theme_color: "#317EFB",
      "theme-color": "#317EFB",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-512x512.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          destination: path.join("icons")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;