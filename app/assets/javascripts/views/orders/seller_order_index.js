EtsyClone.Views.SellerOrderIndex = Backbone.CompositeView.extend({
  template: JST["orders/seller_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addOrderItem);
  },

  addOrder: function(order) {
    var orderItemView = new EtsyClone.Views.CompletedOrderShow({
      model: order,
      collection: order.order_items()
    });

    this.addSubview(".order", orderItemView);
  },

  renderOrderedItems: function () {
    this.collection.each(this.addOrder.bind(this));
  },

  render: function () {
    var renderedContent = this.template({
      orders: this.collection
    });
    this.$el.html(renderedContent);
    this.renderOrderedItems();
    return this;
  }
});
