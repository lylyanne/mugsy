EtsyClone.Views.OrderItemUpdateForm = Backbone.View.extend({
  template: JST["order_items/update_form"],

  // initialize: function (options) {
  //   this.product = options.product
  //   this.collection = CURRENT_ORDER.current_order.order_items()
  // },

  // events: {
  //   "submit form" : "submit"
  // },
  //
  // submit: function (event) {
  //   event.preventDefault();
  //   var that = this;
  //
  //   var $form = $(event.currentTarget);
  //   var params = $form.serializeJSON();
  //   this.model.set(params);
  //   this.model.save({}, {
  //     success: function () {
  //       that.collection.add(that.model, { merge: true });
  //       Backbone.history.navigate("#/cart", { trigger: true });
  //     }
  //   });
  // },

  render: function () {
    var renderedContent = this.template({ order_item: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
