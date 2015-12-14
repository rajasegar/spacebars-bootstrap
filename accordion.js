if(Meteor.isClient){
  Template.accordion.helpers({
    parent_id:function(){
      return this.id;
    }
  });


  Template.accordion_item.helpers({
    collapse_link:function(){
      console.log(Blaze.getData(Blaze.parentView));

      return "#collapse" + this.title;
    },
    collapse_in:function(){
      return this.open ? "in" : "";
    },
    type:function(){
      var accordion_type = this.type || 'default';
      return accordion_type;
    }

  });

  Template.collapse_link.helpers({
    type:function(){
      var btn_type = this.type || 'default';
      return btn_type;
    }
  });

  Template.collapse_btn.helpers({
    type:function(){
      var btn_type = this.type || 'default';
      return btn_type;
    }
  });
}
