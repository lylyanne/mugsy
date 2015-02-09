EtsyClone.Collections.Products = Backbone.Collection.extend({
  model: EtsyClone.Models.Product,
  url: 'api/products',

  getOrFetch: function (id) {
    var product = this.get(id);
    var products = this;

    if(!product) {
      product = new EtsyClone.Models.Product({ id: id });
      product.fetch({
        success: function () {
          products.add(product);
        }.bind(this)
      });
    } else {
      product.fetch();
    }

    return product;
  }
})
