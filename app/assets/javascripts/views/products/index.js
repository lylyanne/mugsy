EtsyClone.Views.ProductsIndex = Backbone.View.extend({
  template: JST["products/index"],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    this.$el.empty();
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    this.collection.each(function(product) {
      var buyerProductShow = new EtsyClone.Views.BuyerProductShow( { model: product } )
      this.$('.row').append(buyerProductShow.render().$el);
    });

    return this;
  }
});
