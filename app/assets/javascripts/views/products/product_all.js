EtsyClone.Views.ProductAll = Backbone.View.extend({
  template: JST["products/all"],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      products: this.collection
    });
    
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.ShopManagement({model: CURRENT_USER.shop});
    this.$('.shop-management').append(mgmt.render().$el);
    return this;
  }

})
