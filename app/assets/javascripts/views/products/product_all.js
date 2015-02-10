EtsyClone.Views.ProductAll = Backbone.CompositeView.extend({
  template: JST["products/all"],

  initialize: function (options) {
    this.$nav = options.$nav;
    this.$cart = options.$cart;
    var order = new EtsyClone.Models.Order(CURRENT_ORDER);
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
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.Navbar();
    this.$nav.html(mgmt.render().$el);
    var cart = new EtsyClone.Views.Cart();
    this.$cart.html(cart.render().$el);
    this.renderProducts();
    return this;
  }

})
