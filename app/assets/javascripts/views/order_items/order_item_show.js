EtsyClone.Views.OrderItemShow = Backbone.CompositeView.extend({
  template: JST["order_items/show"],

  initialize: function (options) {
    this.product = options.product;
    this.listenTo(this.product, "sync", this.render);
    this.listenTo(this.model, "sync add remove", this.render);
  },

  renderUpdateCart: function () {
    var orderItemFormView = new EtsyClone.Views.OrderItemUpdateForm( {
      model: this.model,
      collection: this.collection
    });

    this.addSubview('.form', orderItemFormView);
  },

  render: function () {
    var renderedContent = this.template({
      product: this.product,
      shop: this.product.shop()
    });

    this.$el.html(renderedContent);
    this.renderUpdateCart();
    return this;
  }
})
