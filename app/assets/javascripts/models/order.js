EtsyClone.Models.Order = Backbone.Model.extend({
  url: 'api/cart',

  order_items: function () {
    this._order_items = this._order_items ||
    new EtsyClone.Collections.OrderItems([], { order: this });
    return this._order_items;
  },

  parse: function (payload) {
    if (payload.order_items) {
      this.order_items().set(payload.order_items, { parse: true });
      delete payload.order_items;
    }

    return payload;
  }
})
