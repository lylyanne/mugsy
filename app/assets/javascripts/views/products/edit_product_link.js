EtsyClone.Views.EditProductLink = Backbone.View.extend({
  template: JST["products/link"],
  className: 'edit-link',
  initialize: function (options) {
    this.product = options.product
  },

  render: function () {
    var renderedContent = this.template({
      product: this.product
    });

    this.$el.html(renderedContent);
    return this;
  }
})
