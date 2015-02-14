EtsyClone.Views.ShopForm = Backbone.View.extend({
  template: JST["shops/form"],

  initialize: function () {
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

  // showErrors: function(response) {
  //   _(response.responseJSON).each(function (errors, name) {
  //     var controlGroup = this.$('#shop_' + errors.name);
  //     controlGroup.addClass('error');
  //     _(errors).each(function (message) {
  //       this.$('.help-inline').text(message);
  //     })
  //   });
  // },
  //
  // hideErrors: function () {
  //   this.$('.control-group').removeClass('error');
  //   this.$('.help-inline').text('');
  // },

  submit: function (event) {
    event.preventDefault();
    var that = this;

    this._params.shop["name"] = $("#shop_name").val();
    this._params.shop["shop_image"] = $(".shop-form-image").attr("src");
    this.model.set(this._params);
    this.model.save({}, {
      success: function () {
        //that.hideErrors();
        that.collection.add(that.model, { merge: true });
        CURRENT_USER.shop = that.model;
        Backbone.history.navigate("#/shops/" + that.model.id, { trigger: true });
      },
      // error: function (model, response) {
      //   that.showErrors(response);
      // },
    });
  }
});
