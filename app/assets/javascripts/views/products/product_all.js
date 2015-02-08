EtsyClone.Views.ProductAll = Backbone.View.extend({
  template: JST["products/all"],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      products: this.collection,
    });

    this.$el.html(renderedContent);
    return this;
  }

})
