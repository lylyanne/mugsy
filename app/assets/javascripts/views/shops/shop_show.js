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
      model: product
    });

    this.addSubview(".product", productView);

    if (CURRENT_USER.shop.id === this.model.id) {
      this.$('.form').append(
        "<a href='#/products/:id/edit/'>Edit Product</a>"
      )
    } else {
      this.renderOrderItemForm(product);
    }
  },

  renderProducts: function () {
    this.model.products().each(this.addProduct.bind(this));
  },

  renderOrderItemForm: function (product) {
    var new_item = new EtsyClone.Models.OrderItem();

    var orderFormView = new EtsyClone.Views.OrderItemForm( {
      model: new_item,
      collection: this.order_item_collection,
      product: product
    } );

    this.addSubview('.form', orderFormView);
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
