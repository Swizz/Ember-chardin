import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'span',

  attributeBindings : ['hint:data-intro', 'position:data-position']
});
