var reactor = require('../reactor');
var TEST_ACTION  = require('../actionTypes').TEST_ACTION;

function testAction(input){
  reactor.dispatch(TEST_ACTION, input)
}

var actions = {
  testAction:testAction
}

module.exports = actions;
