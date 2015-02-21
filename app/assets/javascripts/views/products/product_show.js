EtsyClone.Views.ProductShow = Backbone.CompositeView.extend({
  template: JST["products/show"],

  initialize: function (options) {
    this.shop = options.shop;
    this.listenTo(this.shop, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
  },

  renderLinkAndForm: function () {
    if (this.shop.id == CURRENT_USER.shop.id) {
      this.renderLink();
    }
    this.renderOrderItemForm();
  },

  renderOrderItemForm: function () {
    var new_item = new EtsyClone.Models.OrderItem();

    var orderFormView = new EtsyClone.Views.OrderItemForm({
      model: new_item,
      collection: CURRENT_ORDER.current_order.order_items(),
      product: this.model
    });

    this.addSubview('.order-form', orderFormView);
  },

  renderLink: function () {
    var linkView = new EtsyClone.Views.EditProductLink({
      product: this.model
    });
    
    this.addSubview('.edit-product-link', linkView);
  },

  render: function () {
    var renderedContent = this.template({
      product: this.model,
      shop: this.shop
    });

    this.$el.html(renderedContent);
    this.renderLinkAndForm();
    return this;
  }
});
