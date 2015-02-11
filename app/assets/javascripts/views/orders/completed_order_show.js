EtsyClone.Views.CompletedOrderShow = Backbone.View.extend({
  template: JST["order_items/completed_sold_order_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    //this.listenTo(this.model.order_items(), "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      order: this.model,
      order_items: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
})
