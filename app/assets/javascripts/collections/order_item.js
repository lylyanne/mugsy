EtsyClone.Collections.OrderItems = Backbone.Collection.extend({
  model: EtsyClone.Models.OrderItem,
  url: 'api/order_items',

  
  // initialize: function (models, options) {
  //   this.order = options.order;
  // }

})
