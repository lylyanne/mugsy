EtsyClone.Views.OrderShow = Backbone.CompositeView.extend({
  template: JST["orders/show"],

  initialize: function () {
    this.collection = this.model.order_items();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.listenTo(this.collection, 'add', this.addCartOrderItem);
  },

  addCartOrderItem: function(order_item) {
    var orderItemView = new EtsyClone.Views.OrderItemShow({
      model: order_item,
      product: order_item.product(),
      collection: this.collection
    });

    this.addSubview(".order-item", orderItemView);
  },

  renderCartOrderItems: function () {
    this.model.order_items().each(this.addCartOrderItem.bind(this));
  },

  render: function () {
    console.log('rendering order show');
    var renderedContent = this.template({
      order: this.model,
      order_items: this.collection
    });
    this.$el.html(renderedContent);
    this.renderCartOrderItems();
    return this;
  }
});
