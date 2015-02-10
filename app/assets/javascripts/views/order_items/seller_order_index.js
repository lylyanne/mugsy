EtsyClone.Views.SellerOrderItemIndex = Backbone.CompositeView.extend({
  template: JST["order_items/seller_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    //this.listenTo(this.collection, 'add', this.addOrderItem);
  },

  addOrderItem: function(order_item) {
    var orderItemView = new EtsyClone.Views.CompletedSoldItemShow({
      product: order_item.product(),
      model: order_item,
      order: order_item.order()
    });

    this.addSubview(".order-item", orderItemView);
  },

  renderOrderedItems: function () {
    this.collection.each(this.addOrderItem.bind(this));
  },

  render: function () {
    var renderedContent = this.template({
      order_items: this.collection
    });
    this.$el.html(renderedContent);
    this.renderOrderedItems();
    return this;
  }
});
