EtsyClone.Models.Order = Backbone.Model.extend({
  urlRoot: 'api/orders',

  order_items: function () {
    this._order_items = this._order_items ||
    new EtsyClone.Collections.OrderItems([], { order: this });
    return this._order_items;
  },

  subtotal: function () {
    var subtotal = 0
    this.order_items().each(function (item) {
      subtotal += item.get("quantity") * parseFloat(item.get('unit_price'));
    })
    return subtotal
  },

  tax: function () {
    var tax = this.subtotal() * 0.0925;
    return tax;
  },

  total: function () {
    return this.subtotal() + parseFloat(this.get('shipping')) + this.tax();
  },

  parse: function (payload) {
    if (payload.order_items) {
      this.order_items().set(payload.order_items, { parse: true });
      delete payload.order_items;
    }

    return payload;
  }
})
