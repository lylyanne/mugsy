EtsyClone.Collections.ShopSearches = Backbone.Collection.extend({
  model: EtsyClone.Models.Shop,
  url: function() {
    return '/api/shops?query=' + this.query;
  },

  initialize: function (models, options) {
    this.query = options.query;
  },

  products: function () {
    if (!this._products) {
      this._products = new EtsyClone.Collections.Products([], {
        shop: this
      });
    };
    return this._products;
  },

  parse: function (payload) {
    if (payload.products) {
      this.products().set(payload.products);
      delete payload.products;
    }

    return payload;
  }
});
