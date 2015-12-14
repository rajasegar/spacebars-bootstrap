if(Meteor.isClient){
  Template.tooltip.created = function(){

  };

  Template.tooltip.rendered = function(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  };
}
