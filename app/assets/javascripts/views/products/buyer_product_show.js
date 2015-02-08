EtsyClone.Views.BuyerProductShow = Backbone.View.extend({
  template: JST["products/buyer_product_show"],

  initialize: function () {
      this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var renderedContent = this.template({
      product: this.model,
      shop: this.model.shop()
    });
    this.$el.html(renderedContent);
    return this;
  }
});
