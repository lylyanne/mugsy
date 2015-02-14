EtsyClone.Models.Shop = Backbone.Model.extend({
  urlRoot: 'api/shops',

  validate: function (attrs) {
    var errors = [];

    if (!attrs.name) {
      errors.push({name: 'name', message: 'Please fill name field.'});
    }
    if (!attrs.shop_image) {
      errors.push({name: 'shop_image', message: 'Please select a shop logo.'});
    }

    return errors.length > 0 ? errors : false;
  },

  products: function () {
    this._products = this._products ||
      new EtsyClone.Collections.Products([], { shop: this });
    return this._products;
  },

  parse: function (payload) {
    if (payload.products) {
      this.products().set(payload.products, { parse: true });
      delete payload.products;
    }

    return payload;
  }
})
