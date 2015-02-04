EtsyClone.Views.ShopWelcome = Backbone.View.extend({
  template: JST["shops/welcome"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
