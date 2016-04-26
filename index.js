/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-chardin',

  included: function(app, parentAddon) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
     this.app = app = app.app;
    }
    this._super.included(app);

    var target = (parentAddon || app);
    var options = target.options || {};

    target.import(target.bowerDirectory + "/chardin.js/chardinjs.css");
    target.import(target.bowerDirectory + "/chardin.js/chardinjs.js");
  }
};
