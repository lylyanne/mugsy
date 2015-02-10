EtsyClone.Views.CompletedSoldItemShow = Backbone.View.extend({
  template: JST["order_items/completed_sold_show"],

  initialize: function (options) {
    this.product = options.product;
    this.listenTo(this.product, "sync", this.render);
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model.order(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      product: this.product,
      order_item: this.model,
      order: this.model.order()
    });

    this.$el.html(renderedContent);
    return this;
  }
})
