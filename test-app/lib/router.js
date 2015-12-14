FlowRouter.notfound = {
  // Subscriptions registered here  don't have Fast render support
  subscriptions:function(){

  },
  action:function(){
    BlazeLayout.render('layout',{main:'404'});
  }
};

FlowRouter.route('/',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "home"});
  }
});

var componentRoutes = FlowRouter.group({
  prefix:'/components',
  name:'components',
  triggersEnter:[function(context,redirect){
    //console.log('running group triggers');
  }]
});

componentRoutes.route('/',{
  action:function(params){
    BlazeLayout.render('layout',{main:"components"});
  }
});

componentRoutes.route('/alerts',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "alerts_example"});
  }
});

componentRoutes.route('/dropdowns',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "dropdown_examples"});
  }
});


componentRoutes.route('/button_groups',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "buttongroup_examples"});
  }
});


componentRoutes.route('/buttons',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "button_example"});
  }
});

componentRoutes.route('/icons',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "icons_example"});
  }
});

componentRoutes.route('/panels',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "panels_example"});
  }
});

componentRoutes.route('/accordions',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "accordion_example"});
  }
});


componentRoutes.route('/carousels',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "carousel_example"});
  }
});

componentRoutes.route('/modal',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "modal_example"});
  }
});

componentRoutes.route('/labels',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "labels_example"});
  }
});

componentRoutes.route('/input-groups',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "input_groups_example"});
  }
});

componentRoutes.route('/images',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "images_example"});
  }
});


componentRoutes.route('/tooltips',{
  action:function(params,queryparams){
    BlazeLayout.render('layout',{ main: "tooltip_example"});
  }
});
