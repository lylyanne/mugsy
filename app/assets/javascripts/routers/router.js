EtsyClone.Routers.Router = Backbone.Router.extend({
  initialize: function(shops, $rootEl, $nav, $cart) {
    this.shops = shops;
    this.$rootEl = $rootEl;
    this.$nav = $nav;
    this.$cart = $cart;
    var mgmt = new EtsyClone.Views.Navbar();
    this.$nav.html(mgmt.render().$el);
    var cart = new EtsyClone.Views.Cart();
    this.$cart.html(cart.render().$el);
    // CURRENT_ORDER.current_order.save();
  },

  routes: {
    '': 'index',
    'shops/new': 'shopNew',
    'shops/:id': 'shopShow',
    'shops/:id/edit' : 'shopEdit',
    'seller_products/new' : 'productNew',
    'products/:id/edit' : 'productEdit',
    'cart' : 'cartShow',
    'view_my_sales' : 'sellerOrders',
    'view_my_purchases' : 'buyerOrders'
  },

  index: function () {
    var all_products = new EtsyClone.Collections.Products();
    all_products.fetch();

    var index = new EtsyClone.Views.ProductAll({
      collection: all_products
    });

    this._swapView(index);
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

    var shopView = new EtsyClone.Views.ShopShow({
      model: shop
    });

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

  productEdit: function (id) {
    var product = CURRENT_USER.shop.products().getOrFetch(id);
    var editView = new EtsyClone.Views.ProductForm({
      model: product,
      collection:  CURRENT_USER.shop.products()
    });
    this._swapView(editView);
  },

  cartShow: function () {
    CURRENT_ORDER.current_order.fetch();
    var cartShowView = new EtsyClone.Views.OrderShow({
      model: CURRENT_ORDER.current_order,
      $cart: this.$cart
    });

    this._swapView(cartShowView);
  },

  sellerOrders: function() {
    var orders = new EtsyClone.Collections.Orders();
    orders.fetch({data: {role: "seller"} } );

    var sellerView = new EtsyClone.Views.SellerOrderIndex({
      collection: orders
    });

    this._swapView(sellerView);
  },

  buyerOrders: function() {
    var order_items = new EtsyClone.Collections.OrderItems();
    order_items.fetch({data: {role: "buyer"} } );

    var buyerView = new EtsyClone.Views.BuyerOrderItemIndex({
      collection: order_items
    });

    this._swapView(buyerView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
