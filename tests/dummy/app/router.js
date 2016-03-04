import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('tutorial', { path: 'getting-started' });
  this.route('further', { path: 'go-further' });
  this.route('index', { path: 'demo' });
});

export default Router;
