
describe('btn template',function(){
  it('contains a .btn class',function(){

    var button = Blaze.render(Template.btn, "body");
    expect($('button').find(".btn")[0]).toBeDefined();


  });
});
