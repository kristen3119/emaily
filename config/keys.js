// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production'){
  //we are in preoduction return prod keys
  module.exports = require('./prod')
} else {
  //we are in development return dev keys
  module.exports = require('./dev')
}
