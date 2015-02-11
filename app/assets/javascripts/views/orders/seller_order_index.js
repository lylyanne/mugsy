EtsyClone.Views.SellerOrderIndex = Backbone.CompositeView.extend({
  template: JST["orders/seller_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      orders: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
