const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  images: {
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "~@styles/base.scss";`,
  },
});
