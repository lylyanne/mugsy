window.EtsyClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    var $rootEl =  $('#shop-navigation');
    var shops = new EtsyClone.Collections.Shops();
    shops.fetch();

    new EtsyClone.Routers.Router(shops, $rootEl);
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   EtsyClone.initialize();
// });
