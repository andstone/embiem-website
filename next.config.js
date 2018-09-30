// next.config.js
const withMDX = require("@zeit/next-mdx")();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});
