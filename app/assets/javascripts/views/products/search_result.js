EtsyClone.Views.SearchResult = Backbone.CompositeView.extend({
  template: JST["products/all"],

  initialize: function (options) {
    this.shops = options.shops;
    this.products = options.products;
    var order = new EtsyClone.Models.Order();
    this.order_item_collection = order.order_items();

    this.listenTo(this.shops, 'sync', this.addShopSearchToCollection);
    this.listenTo(this.products, 'add', this.render);
  },

  addShopSearchToCollection: function () {
    var that = this;
    this.shops.each(function (shop) {
      that.products.add(shop.products().models);
    });
  },

  addProduct: function(product) {
    var productView = new EtsyClone.Views.ProductShow({
      model: product,
      shop: product.shop()
    });

    this.addSubview(".product", productView);
  },

  renderProducts: function () {
    this.products.each(this.addProduct.bind(this));
  },

  render: function () {
    var renderedContent = this.template({products: this.products});
    this.$el.html(renderedContent);
    this.renderProducts();
    return this;
  }
});
