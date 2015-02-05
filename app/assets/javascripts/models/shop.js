EtsyClone.Models.Shop = Backbone.Model.extend({
  urlRoot: 'api/shops',

  products: function () {
    this._products = this._products ||
      new EtsyClone.Collections.Products([], { shop: this });
    return this._products;
  },

  parse: function (payload) {
    if (payload.products) {
      this.products().set(payload.products, { parse: true });
      delete payload.products;
    }

    return payload;
  }
})
