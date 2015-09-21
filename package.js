Package.describe({
  name: 'rajasegar:spacebars-bootstrap',
  version: '0.0.1',
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
  api.use(['twbs:bootstrap','templating'],'client');
  api.addFiles(['spacebars-bootstrap.js','template.html','template.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rajasegar:spacebars-bootstrap');
  api.addFiles('spacebars-bootstrap-tests.js');
});
