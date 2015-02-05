EtsyClone.Views.ProductAll = Backbone.View.extend({
  template: JST["products/all"],

  events: {
    "click button.edit-product" : "editProduct"
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  // editProduct: function () {
  //   Backbone.history.navigate("#/products/<%= product.get("id")%>/");
  // },

  render: function () {
    var renderedContent = this.template({
      products: this.collection
    });

    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.ShopManagement({model: CURRENT_USER.shop});
    this.$('.shop-management').append(mgmt.render().$el);
    return this;
  }

})
