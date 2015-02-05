EtsyClone.Views.ProductShow = Backbone.View.extend({
  template: JST["products/show"],

  render: function () {
    var renderedContent = this.template({
      product: this.model
    });
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.ShopManagement({model: CURRENT_USER.shop});
    this.$('.shop-management').append(mgmt.render().$el);
    return this;
  }
});
