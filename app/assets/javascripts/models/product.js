EtsyClone.Models.Product = Backbone.Model.extend({
  urlRoot: 'api/products',

  // shop: function (id) {
  //   this._shop = this._shop ||
  //   new EtsyClone.Models.Shop({id: id});
  //   return this._shop;
  // },
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
