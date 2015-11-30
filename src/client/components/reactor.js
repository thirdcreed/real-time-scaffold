var Reactor = require('nuclear-js').Reactor;

const reactor = new Reactor({
  debug:true
})

reactor.registerStores(require('./stores'))

module.exports = reactor;
