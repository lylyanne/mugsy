EtsyClone.Views.ProductForm = Backbone.View.extend({
  template: JST["products/form"],

  initialize: function () {
    this.setFilepicker();
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["product"] = {
      "product_image": null
    }
  },

  setFilepicker: function(){
    if (filepicker){
      //if loaded set key
      filepicker.setKey("Aqfd2iWRiQPitlj7Gri0Qz");
    }
  },

  events: {
    'click button.update-image': 'pickAProductImage',
    'submit form' : 'submit'
  },

  render: function () {
    this.setFilepicker();
    var renderedContent = this.template({
      product: this.model
    });
    this.$el.html(renderedContent);
    var mgmt = new EtsyClone.Views.ShopManagement({model: CURRENT_USER.shop});
    this.$('.shop-management').append(mgmt.render().$el);
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
        Backbone.history.navigate("#/products/" + that.model.id, { trigger: true });
      }
    });
  }
});
