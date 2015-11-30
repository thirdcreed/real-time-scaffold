var React = require('react');

var reactor = require('../reactor');
var getters = require('./getters');
var actions = require('./actions');

var testSentence = React.createClass({
  mixins: [reactor.React],

  getDataBindings: function() {
    console.log(reactor.evaluate('!!!',getters.testGetter));
     return { testee:getters.testGetter } 
  },

  render: function () {
    alert('FAG GAFFE');
    var p = React.createElement('p',null,this.state.testee);
    return ReactDOM.render(p,document.getElementById('HERE')); 
  }

})

module.export = testSentence;

