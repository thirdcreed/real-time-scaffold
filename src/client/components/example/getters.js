var Immutable = require('nuclear-js');
var Map = Immutable.Map;

module.exports = {
  testr: [
    ['test','testes'],
    function(testes){
      console.log('!testes',testes);
      return testes;
    }
  ]
}

