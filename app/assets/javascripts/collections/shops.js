EtsyClone.Collections.Shops = Backbone.Collection.extend({
  model: EtsyClone.Models.Shop,
  url: 'api/shops',

  getOrFetch: function (id) {
    var shop = this.get(id);
    var shops = this;

    if(!shop) {
      shop = new EtsyClone.Models.Shop({ id: id });
      shop.fetch({
        success: function () {
          shops.add(shop);
        }.bind(this)
      });
    } else {
      shop.fetch();
    }

    return shop;
  }
})

EtsyClone.Collections.shops = new EtsyClone.Collections.Shops();
