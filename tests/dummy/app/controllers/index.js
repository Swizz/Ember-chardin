import Ember from 'ember';

export default Ember.Controller.extend({
  chardin : Ember.inject.service(),

  actions : {
    showHints: function () {
      this.get('chardin').show();
    }
  }
});
