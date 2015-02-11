EtsyClone.Views.CompletedOrderItemShow = Backbone.View.extend({
  template: JST["order_items/completed_order_show"],

  initialize: function (options) {
    this.product = options.product;
    this.order = options.order;
    this.listenTo(this.product, "sync", this.render);
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model.order(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      product: this.product,
      shop: this.product.shop(),
      order_item: this.model,
      order: this.order
    });

    this.$el.html(renderedContent);
    return this;
  }
})
