var Store = require('nuclear-js').Store;
var Immutable = require('nuclear-js').Immutable;
var actionTypes = require('../actionTypes');

var Map = Immutable.Map;

module.exports = Store({
  initialize: function(){
    this.on(actionTypes.TEST_ACTION, logTest)
  },

  getInitialState: function(){
    return Map({
      testes:2 
    }) 
  }
})

function logTest(state){
  console.log('STATE',state);
   return state.set('testes', state.get('testes') + 1);
}
