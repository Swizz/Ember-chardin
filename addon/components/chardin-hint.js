import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'span',
  classNames: ['chardin-hint'],

  attributeBindings : ['hint:data-intro', 'position:data-position']
});
