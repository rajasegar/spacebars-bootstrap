if(Meteor.isClient){


Template.a_btn.helpers({
  type:function(){
    var typ = this.type || "default" ;
    return typ;
  }
});


Template.btn.helpers({
  type:function(){
    var type = this.type || "default" ;
    return type;
  },
  size:function(){
    var size = "btn-";
    return (this.size) ? (size + this.size) : "";
  }
});


Template.input_btn.helpers({
  type:function(){
    var type = this.type || "default" ;
    return type;
  }
});
}
