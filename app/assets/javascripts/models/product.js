EtsyClone.Models.Product = Backbone.Model.extend({
  urlRoot: 'api/products',

  shop: function () {
    this._shop = this._shop ||
    new EtsyClone.Models.Shop();
    return this._shop;
  },

  parse: function (payload) {
    if (payload.shop) {
      this.shop().set(payload.shop);
      delete payload.shop;
    }

    return payload;
  }
})
