window.EtsyClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    var $rootEl =  $('#shop-navigation');
    EtsyClone.Collections.shops = new EtsyClone.Collections.Shops();
    EtsyClone.Collections.shops.fetch();

    new EtsyClone.Routers.Router(EtsyClone.Collections.shops, $rootEl);
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   EtsyClone.initialize();
// });
