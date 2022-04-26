const withTM = require("next-transpile-modules")(["shared"]);
const withPWA = require("next-pwa");

module.exports = withPWA([], {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: false,
    fallbacks: {
      image: "/static/images/fallback.png",
    },
  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(eot|woff|woff2|ttf)$/,
  //     use: {
  //       loader: "url-loader",
  //       options: 100000,
  //       name: "[name].[ext]",
  //     },
  //     pwa: {
  //       dest: "public",
  //       register: true,
  //       skipWaiting: false,
  //       fallbacks: {
  //         image: "/static/images/fallback.png",
  //       },
  //     },
  //   });
  //   return config;
  // },
});
