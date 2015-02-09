EtsyClone.Views.OrderItemUpdateForm = Backbone.View.extend({
  template: JST["order_items/update_form"],

  events: {
    "click button.update" : "updateQuantity",
    "click button.destroy" : "deleteOrderItem"
  },

  updateQuantity: function (event) {
    event.preventDefault();
    var that = this;

    var $form = this.$('form');
    var params = $form.serializeJSON();

    this.model.set(params);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("#/cart", { trigger: true });
      }
    });
  },

  deleteOrderItem: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  render: function () {
    var renderedContent = this.template({ order_item: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
