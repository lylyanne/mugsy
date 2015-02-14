EtsyClone.Collections.ProductSearches = Backbone.Collection.extend({
  model: EtsyClone.Models.Product,
  url: function() {
    return '/api/products?query=' + this.query;
  },

  initialize: function (models, options) {
    this.query = options.query;
  },
});
