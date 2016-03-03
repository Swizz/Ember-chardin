import Ember from 'ember';

export default Ember.Controller.extend({

  actions : {
    call: () => {
      $("body").chardinJs('start');
    }
  }
});
