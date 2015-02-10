EtsyClone.Views.ProductForm = Backbone.View.extend({
  template: JST["products/form"],

  initialize: function (options) {
    this.$nav = options.$nav;
    this.$cart = options.$cart;
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["product"] = {
      "product_image": null
    }
  },

  events: {
    'click button.update-image': 'pickAProductImage',
    'submit form' : 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      product: this.model
    });
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.Navbar();
    this.$nav.html(mgmt.render().$el);
    var cart = new EtsyClone.Views.Cart();
    this.$cart.html(cart.render().$el);
    return this;
  },

  pickAProductImage: function () {
    event.preventDefault();
    var that = this;

    filepicker.pick(
      function(Blob){
        this._params.product["product_image"] = Blob.url;
        $(".product-form-image").attr("src", Blob.url);
      }.bind(this)
    );
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;
    var $form = $(event.currentTarget);
    var params = $form.serializeJSON();
    _.extend(this._params, params);
    this._params.product["product_image"] = $(".product-form-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        CURRENT_USER.shop.products().add(that.model, { merge: true });
        Backbone.history.navigate("#/shops/" + CURRENT_USER.shop.id, { trigger: true });
      }
    });
  }
});
