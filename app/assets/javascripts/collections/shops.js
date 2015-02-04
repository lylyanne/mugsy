EtsyClone.Collections.Shops = Backbone.Collection.extend({
  model: EtsyClone.Models.Shop,
  url: '/shops',

  getOrFetch: function (id) {
    var shop = this.get(id);

    if(!shop) {
      shop = new EtsyClone.Models.Shop({ id: id });
      shop.fetch({
        success: function () {
          this.add(shop);
        }.bind(this)
      });
    } else {
      shop.fetch();
    }

    return shop;
  }
})
