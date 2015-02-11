EtsyClone.Models.Product = Backbone.Model.extend({
  urlRoot: 'api/products',

  shop: function () {
    if (!this._shop) {
      this._shop = new EtsyClone.Models.Shop({ id: this.get('shop_id')});
    }

    // this._shop = this._shop ||
    // return EtsyClone.Collections.shops.getOrFetch(this.get('shop_id'));
    return this._shop;
  }
})
