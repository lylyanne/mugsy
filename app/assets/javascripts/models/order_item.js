EtsyClone.Models.OrderItem = Backbone.Model.extend({
  urlRoot: 'api/order_items',

  order: function () {
    //this._order = this._order ||
    if (!this._order) {
      // if (typeof this.get('order_id') !== 'undefined') {
      this._order =  new EtsyClone.Models.Order({ id: this.get('order_id')});
      // } else {
      //   this._order = CURRENT_ORDER.current_order;
      // }
    }
    return this._order;
  },

  product: function () {
    this._product = this._product ||
      EtsyClone.Collections.products.getOrFetch(this.get('product_id'));
    return this._product;
  },

  parse: function (payload) {
    if (payload.order) {
      this.order().set(payload.order, { parse: true });
      delete payload.order;
    }

    return payload;
  }
})
