EtsyClone.Models.Product = Backbone.Model.extend({
  urlRoot: 'api/products',

  shop: function () {
    this._shop = this._shop ||
      EtsyClone.Collections.shops.getOrFetch(this.get('shop_id'));
    return this._shop;
  }
  //
  // parse: function (payload) {
  //   if (payload.shop) {
  //     this.shop(payload.shop.id).set(payload.shop);
  //     delete payload.shop;
  //   }
  //
  //   return payload;
  // }
})
