if(Meteor.isClient){
  Template.label.helpers({
    type:function(){
      var typ = this.type || "default";
      return typ;
    }
  });
}
