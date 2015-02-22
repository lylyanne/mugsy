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
    var $search = $('.search-div');
    EtsyClone.Collections.shops = new EtsyClone.Collections.Shops();
    EtsyClone.Collections.shops.fetch();

    new EtsyClone.Routers.Router(EtsyClone.Collections.shops, $rootEl,
      $nav, $cart, $search);
    Backbone.history.start();
  }
};
