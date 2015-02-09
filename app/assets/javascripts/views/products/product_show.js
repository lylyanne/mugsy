EtsyClone.Views.ProductShow = Backbone.View.extend({
  template: JST["products/show"],

  initialize: function (options) {
    this.shop = options.shop;
    this.listenTo(this.shop, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      product: this.model,
      shop: this.shop
    });

    this.$el.html(renderedContent);
    return this;
  }
});
