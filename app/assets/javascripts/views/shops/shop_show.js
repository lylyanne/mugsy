EtsyClone.Views.ShopShow = Backbone.CompositeView.extend({
  template: JST["shops/show"],

  initialize: function () {
    this.collection = this.model.products();
    var order = new EtsyClone.Models.Order(CURRENT_ORDER);
    this.order_item_collection = order.order_items();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addProduct);
  },

  addProduct: function(product) {
    var productView = new EtsyClone.Views.ProductShow({
      model: product,
      shop: this.model
    });

    this.addSubview(".product", productView);
  },

  renderProducts: function () {
    this.model.products().each(this.addProduct.bind(this));
  },

  render: function () {
    var renderedContent = this.template({
      shop: this.model
    });

    this.$el.html(renderedContent);
    this.renderProducts();
    return this;
  }
});
