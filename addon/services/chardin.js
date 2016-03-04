import Ember from 'ember';

export default Ember.Service.extend({

  show : function() {
    Ember.$('body').chardinJs('start');
  },

  hide : function() {
    Ember.$('body').chardinJs('stop');
  },

  toggle : function() {
    Ember.$('body').chardinJs('toggle');
  }

});
