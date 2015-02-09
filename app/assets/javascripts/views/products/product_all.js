EtsyClone.Views.ProductAll = Backbone.CompositeView.extend({
  template: JST["products/all"],

  initialize: function () {
    var order = new EtsyClone.Models.Order(CURRENT_ORDER);
    this.order_item_collection = order.order_items();
    this.listenTo(this.collection, 'sync', this.render);
  },

  addProduct: function(product) {
    var shop_id = parseInt(product.escape("shop_id"));
    var shop = EtsyClone.Collections.shops.getOrFetch(shop_id);

    var productView = new EtsyClone.Views.ProductShow({
      model: product,
      shop: product.shop()
    });

    this.addSubview(".product", productView);

    if (shop_id == CURRENT_USER.shop.id) {
      this.renderLink(product);
    } else {
      this.renderOrderItemForm(product);
    }
  },

  renderProducts: function () {
    this.collection.each(this.addProduct.bind(this));
  },

  renderLink: function (product) {
    var linkView = new EtsyClone.Views.EditProductLink({
      product: product
    });

    this.addSubview('.form', linkView);
  },

  renderOrderItemForm: function (product) {
    var new_item = new EtsyClone.Models.OrderItem();

    var orderFormView = new EtsyClone.Views.OrderItemForm( {
      model: new_item,
      collection: this.order_item_collection,
      product: product
    } );

    this.addSubview(".form", orderFormView);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.renderProducts();
    return this;
  }

})
