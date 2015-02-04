EtsyClone.Views.ShopForm = Backbone.View.extend({
  template: JST["shops/form"],

  initialize: function () {
    this.setFilepicker();
    this._imageUrl = "";
    this._params = Object.create(null);
    this._params["shop"] = {
      "name": null,
      "shop_image": null
    }
  },

  setFilepicker: function(){
    if (filepicker){
      //if loaded set key
      filepicker.setKey("Aqfd2iWRiQPitlj7Gri0Qz");
    }
  },

  events: {
    'click button.update-logo': 'pickALogo',
    'submit form' : 'submit'
  },

  render: function () {
    this.setFilepicker();
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
        debugger
        console.log(Blob.url);
        //that.render();
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
        Backbone.history.navigate("#/shops/" + that.model.id, { trigger: true });
      }
    });
  }
});
