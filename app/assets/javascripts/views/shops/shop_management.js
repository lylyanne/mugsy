EtsyClone.Views.ShopManagement = Backbone.View.extend({
  template: JST["shops/management"],

  render: function () {
    var renderedContent = this.template({currentUser: CURRENT_USER});
    this.$el.html(renderedContent);
    return this;
  }
});
