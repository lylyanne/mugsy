EtsyClone.Views.Cart = Backbone.View.extend({
  template: JST["navs/cart"],
  tagName: 'li',

  initialize: function () {
    // CURRENT_ORDER.current_order.fetch();
    this.listenTo(CURRENT_ORDER.current_order, "sync", this.render);
    this.listenTo(CURRENT_ORDER.current_order.order_items(), "add remove", this.render);
  },

  render: function () {
    debugger
    var renderedContent = this.template({
      currentOrder: CURRENT_ORDER.current_order
    });
    this.$el.html(renderedContent);
    return this;
  }
});
