EtsyClone.Views.Cart = Backbone.View.extend({
  template: JST["navs/cart"],
  tagName: 'li',
  render: function () {
    var renderedContent = this.template({
      currentOrder: CURRENT_ORDER.current_order
    });
    this.$el.html(renderedContent);
    return this;
  }
});
