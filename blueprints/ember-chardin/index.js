module.exports = {
  description: 'Installs ember-chardin\'s Bower dependencies',

 	normalizeEntityName: function() {
 		// this prevents an error when the entityName is
 		// not specified (since that doesn't actually matter
 		// to us
 	},

 	afterInstall: function() {
    return this.addBowerPackagesToProject(
      [
        { name: 'chardin.js', target: '^0.1.3' }
      ]
    );
  }
};
