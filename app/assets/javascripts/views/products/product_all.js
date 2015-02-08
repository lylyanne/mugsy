EtsyClone.Views.ProductAll = Backbone.CompositeView.extend({
  template: JST["products/all"],

  initialize: function () {
    var order = new EtsyClone.Models.Order(CURRENT_ORDER);
    this.order_item_collection = order.order_items();
    this.listenTo(this.collection, 'sync', this.render);
  },

  addProduct: function(product) {
    var productView = new EtsyClone.Views.ProductShow({
      model: product
    });

    this.addSubview(".product", productView);

    if (CURRENT_USER.shop.id === product.id) {
      this.$('.form').append(
        '<a href="#/products/"'+ product.id + '/edit/">Edit Product</a>'
      )
    } else {
      this.renderOrderItemForm(product);
    }
  },

  renderProducts: function () {
    this.collection.each(this.addProduct.bind(this));
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
