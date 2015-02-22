EtsyClone.Views.ShopForm = Backbone.BaseView.extend({
  template: JST["shops/form"],

  initialize: function () {
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["shop"] = {
      "name": null,
      "shop_image": null
    };
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

    this.hideErrors();
    this._params.shop["name"] = $("#shop_name").val();
    this._params.shop["shop_image"] = $(".shop-form-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        CURRENT_USER.shop = that.model;
        Backbone.history.navigate("#/shops/" + that.model.id, { trigger: true });
      },
      error: function (model, response) {
        that.showErrors(response);
      },
    });
  }
});
