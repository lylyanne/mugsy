EtsyClone.Views.SellerOrderIndex = Backbone.View.extend({
  template: JST["orders/seller_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click button.shipped" : "markedOrderShipped"
  },

  markedOrderShipped: function (event) {
    //This can be better implemented in CompositeView
    event.preventDefault();
    var orderId = $(event.currentTarget).data('order-id');
    var that = this;
    var order = this.collection.get(orderId);
    order.set({order_status_id: 3});
    order.save({}, {
      success: function () {
        that.collection.add(order, { merge: true });
        Backbone.history.navigate("#/view_my_sales", { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template({
      orders: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
