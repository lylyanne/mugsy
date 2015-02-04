EtsyClone.Views.ShopShow = Backbone.View.extend({
  template: JST["shops/show"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      shop: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
