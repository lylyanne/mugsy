window.EtsyClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    var $rootEl =  $('#shop-navigation');
    var $nav = $('.toolbar-navigation');
    var $cart = $('.cart-text-backbone');
    EtsyClone.Collections.shops = new EtsyClone.Collections.Shops();
    EtsyClone.Collections.shops.fetch();

    new EtsyClone.Routers.Router(EtsyClone.Collections.shops, $rootEl,
      $nav, $cart);
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   EtsyClone.initialize();
// });
