EtsyClone.Views.ShopWelcome = Backbone.View.extend({
  template: JST["shops/welcome"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.ShopManagement({model: CURRENT_USER.shop});
    this.$('.shop-management').append(mgmt.render().$el);
    return this;
  }
});
