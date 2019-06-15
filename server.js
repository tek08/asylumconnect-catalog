// We jump through this little hoop to allow us to use ES6 syntax in our express
// backend code, without it we'd have a mix of imports/requires in the project.
const babelRegister = require('@babel/register');

babelRegister({
  presets: ['@babel/preset-env'],
  ignore: ['./node_modules', '.next'],
});

// Import the rest of our application.
module.exports = require('./nextjs-server.js');
