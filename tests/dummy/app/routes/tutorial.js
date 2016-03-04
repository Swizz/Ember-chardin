import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      Ember.run.schedule("afterRender",this,function() {
        window.Prism.highlightAll();
        console.log('called');
      });

      return true;
    }
  }
});
