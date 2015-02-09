EtsyClone.Models.OrderItem = Backbone.Model.extend({
  urlRoot: 'api/order_items',

  order: function () {
    this._order = this._order ||
    CURRENT_ORDER.current_order.getOrFetch(this.get('order_id'));
    return this._order;
  },

  product: function () {
    this._product = this._product ||
      EtsyClone.Collections.products.getOrFetch(this.get('product_id'));
    return this._product;
  }
})
