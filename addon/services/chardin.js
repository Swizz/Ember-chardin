import Ember from 'ember';

export default Ember.Service.extend({

  start : function() {
    Ember.$('body').chardinJs('start');
  },

  stop : function() {
    Ember.$('body').chardinJs('stop');
  },

  toggle : function() {
    Ember.$('body').chardinJs('toggle');
  }

});
