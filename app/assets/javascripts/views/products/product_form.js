EtsyClone.Views.ProductForm = Backbone.BaseView.extend({
  template: JST["products/form"],

  initialize: function () {
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

    this.hideErrors();
    var $form = $(event.currentTarget);
    var params = $form.serializeJSON();
    _.extend(this._params, params);
    this._params.product["product_image"] = $(".product-form-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        CURRENT_USER.shop.products().add(that.model, { merge: true });
        Backbone.history.navigate("#/shops/" + CURRENT_USER.shop.id, { trigger: true });
      },
      error: function (model, response) {
        that.showErrors(response);
      }
    });
  }
});
