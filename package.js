Package.describe({
  name: 'rajasegar:spacebars-bootstrap',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap components written in Spacebars',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rajasegar/spacebars-bootstrap.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['twbs:bootstrap@3.3.5','templating','reactive-var','reactive-dict'],'client');
  api.addFiles(['spacebars-bootstrap.js']);
  // Templates
  api.addFiles('alerts.html','client');
  api.addFiles('accordion.html','client');
  api.addFiles('button_dropdowns.html','client');
  api.addFiles('button_groups.html','client');
  api.addFiles('buttons.html','client');
  api.addFiles('carousel.html','client');
  api.addFiles('dropdowns.html','client');
  api.addFiles('icons.html','client');
  api.addFiles('images.html','client');
  api.addFiles('input_groups.html','client');
  api.addFiles('labels.html','client');
  api.addFiles('modal.html','client');
  api.addFiles('navbar.html','client');
  api.addFiles('panels.html','client');
  api.addFiles('tabs.html','client');
  api.addFiles('tooltips.html','client');
  // Template helpers
  api.addFiles('accordion.js');
  api.addFiles('buttons.js');
  api.addFiles('carousel.js');
  api.addFiles('labels.js');
  api.addFiles('icons.js');
  api.addFiles('tooltips.js');
});

Package.onTest(function(api) {
  api.use('templating');
  api.use('sanjo:jasmine@0.20.2');
  api.use('velocity:console-reporter@0.1.4');
  api.use('rajasegar:spacebars-bootstrap');
  api.addFiles('spacebars-bootstrap-tests.js');
  api.addFiles('tests/client/buttons-spec.js');
});
