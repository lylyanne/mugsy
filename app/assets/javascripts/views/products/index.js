EtsyClone.Views.ProductsIndex = Backbone.View.extend({
  template: JST["products/index"],
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
