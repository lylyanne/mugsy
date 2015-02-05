EtsyClone.Routers.Router = Backbone.Router.extend({
  initialize: function(shops, $rootEl) {
    this.shops = shops;
    this.$rootEl = $rootEl;
  },

  routes: {
    '': 'index',
    'shop_management': 'shopManagement',
    'shops/new': 'shopNew',
    'shops/:id': 'shopShow',
    'shops/:id/edit' : 'shopEdit',
    'products/new' : 'productNew',
    'products/all' : 'productAll',
    'products/:id' : 'productShow'
  },

  index: function () {
    var index = new EtsyClone.Views.ProductsIndex();
    this._swapView(index);
  },

  shopManagement: function () {
    var welcomeView = new EtsyClone.Views.ShopWelcome({model: CURRENT_USER.shop});
    this._swapView(welcomeView);
  },

  shopNew: function (id) {
    var shop = new EtsyClone.Models.Shop();

    var newView = new EtsyClone.Views.ShopForm({
      model: shop,
      collection: this.shops
    });

    this._swapView(newView);
  },

  shopShow: function (id) {
    var shop = this.shops.getOrFetch(id);
    var shopView = new EtsyClone.Views.ShopShow({ model: shop });
    this._swapView(shopView);
  },

  shopEdit: function (id) {
    var shop = this.shops.getOrFetch(id);
    var editView = new EtsyClone.Views.ShopForm({
      model: shop,
      collection: this.shops
     });
    this._swapView(editView);
  },

  productNew: function () {
    var product = new EtsyClone.Models.Product();

    var newView = new EtsyClone.Views.ProductForm({
      model: product,
      collection:  CURRENT_USER.shop.products()
    });

    this._swapView(newView);
  },

  productAll: function () {
    var allProductView = new EtsyClone.Views.ProductAll({
      collection:  CURRENT_USER.shop.products()
    });

    this._swapView(allProductView);
  },

  productShow: function (id) {
    var product = CURRENT_USER.shop.products().getOrFetch(id);
    var productView = new EtsyClone.Views.ProductShow({ model: product });
    this._swapView(productView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
