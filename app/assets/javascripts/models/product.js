EtsyClone.Models.Product = Backbone.Model.extend({
  urlRoot: 'api/products',

  shop: function () {
    // this._shop = this._shop ||
    return EtsyClone.Collections.shops.getOrFetch(this.get('shop_id'));
    // return this._shop;
  }
})
