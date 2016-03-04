import Ember from 'ember';

export default Ember.Controller.extend({
  chardin : Ember.inject.service(),

  actions : {
    run: function () {
      this.get('chardin').start();
    }
  }
});
