EtsyClone.Views.ProductAll = Backbone.CompositeView.extend({
  template: JST["products/all"],

  initialize: function () {
    var order = new EtsyClone.Models.Order();
    this.order_item_collection = order.order_items();
    this.listenTo(this.collection, 'sync', this.render);
  },

  addProduct: function(product) {
    var productView = new EtsyClone.Views.ProductShow({
      model: product,
      shop: product.shop()
    });

    this.addSubview(".product", productView);
  },

  renderProducts: function () {
    this.collection.each(this.addProduct.bind(this));
  },

  render: function () {
    var renderedContent = this.template({products: this.collection});
    this.$el.html(renderedContent);
    this.renderProducts();
    return this;
  }
});
