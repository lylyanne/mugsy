EtsyClone.Collections.OrderItems = Backbone.Collection.extend({
  model: EtsyClone.Models.OrderItem,
  url: 'api/order_items',

  getOrFetch: function (id) {
    var order_item = this.get(id);
    var order_items = this;

    if(!order_item) {
      order_item = new EtsyClone.Models.OrderItem({ id: id });
      order_item.fetch({
        success: function () {
          order_items.add(order_item);
        }.bind(this)
      });
    } else {
      order_item.fetch();
    }

    return order_item;
  }
})

EtsyClone.Collections.order_items = new EtsyClone.Collections.OrderItems();
