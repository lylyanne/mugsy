EtsyClone.Views.ShopForm = Backbone.View.extend({
  template: JST["shops/form"],

  initialize: function (options) {
    this.$nav = options.$nav;
    this.$cart = options.$cart;
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["shop"] = {
      "name": null,
      "shop_image": null
    }
  },

  events: {
    'click button.update-logo': 'pickALogo',
    'submit form' : 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      shop: this.model
    });
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.Navbar();
    this.$nav.html(mgmt.render().$el);
    var cart = new EtsyClone.Views.Cart();
    this.$cart.html(cart.render().$el);
    return this;
  },

  pickALogo: function () {
    event.preventDefault();
    var that = this;

    filepicker.pick(
      function(Blob){
        this._params.shop["shop_image"] = Blob.url;
        $(".shop-form-image").attr("src", Blob.url);
      }.bind(this)
    );
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;

    this._params.shop["name"] = $("#shop_name").val();
    this._params.shop["shop_image"] = $(".shop-form-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        CURRENT_USER.shop = that.model;
        Backbone.history.navigate("#/shops/" + that.model.id, { trigger: true });
      }
    });
  }
});
