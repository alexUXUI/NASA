const path = require("path");
const withImages = require("next-images");
module.exports = withImages({
  swcMinify: true,
  exclude: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  // put the domains where images will be placed
  images: {
    domains: ["place-hold.it", "media.giphy.com", "images.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
