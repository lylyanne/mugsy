EtsyClone.Collections.Orders = Backbone.Collection.extend({
  model: EtsyClone.Models.Order,
  url: 'api/orders',

  getOrFetch: function (id) {
    var order = this.get(id);
    var orders = this;

    if(!order) {
      order = new EtsyClone.Models.Order({ id: id });
      order.fetch({
        success: function () {
          orders.add(order);
        }.bind(this)
      });
    } else {
      order.fetch();
    }

    return order;
  }
})
