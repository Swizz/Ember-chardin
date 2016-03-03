import Ember from 'ember';

export default Ember.Controller.extend({

  actions : {
    run: () => {
      $("body").chardinJs('start');
    }
  }
});
