EtsyClone.Views.ProductShow = Backbone.View.extend({
  template: JST["products/show"],

  render: function () {
    var renderedContent = this.template({
      product: this.model,
      shop: this.model.shop()
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});
