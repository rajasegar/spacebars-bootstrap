if(Meteor.isClient){
  Template.icon.helpers({
    type:function(){
      var typ = "text-";
      return (this.type) ? (typ + this.type) : "";
    }
  });
}
