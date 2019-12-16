const { GuessPlugin } = require("guess-webpack");
const { parseRoutes } = require("guess-parser");

module.exports = {
  plugins: [
    new GuessPlugin({
      // Alternatively you can provide a Google Analytics View ID
      GA: '208138438',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes(".");
      }
    })
  ]
};
