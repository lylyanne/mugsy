EtsyClone.Collections.Products = Backbone.Collection.extend({
  model: EtsyClone.Models.Product,
  url: 'api/products',
  getOrFetch: function (id) {
    var product = this.get(id);

    if(!product) {
      product = new EtsyClone.Models.Product({ id: id });
      product.fetch({
        success: function () {
          this.add(product);
        }.bind(this)
      });
    } else {
      product.fetch();
    }

    return product;
  },

  initialize: function (options) {
    this.shop = options.shop;
  }

})
