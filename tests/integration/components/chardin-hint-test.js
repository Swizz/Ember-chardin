import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chardin-hint', 'Integration | Component | chardin hint', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chardin-hint}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chardin-hint}}
      template block text
    {{/chardin-hint}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
