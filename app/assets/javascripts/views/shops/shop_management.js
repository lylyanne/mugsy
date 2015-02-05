EtsyClone.Views.ShopManagement = Backbone.View.extend({
  template: JST["shops/management"],

  render: function () {
    var renderedContent = this.template({shop: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});
