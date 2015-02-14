EtsyClone.Views.Search = Backbone.View.extend({
  template: JST["navs/search"],

  events: {
    "click button" : "search"
  },

  search: function (event) {
    event.preventDefault();
    var query = $('.search-field').val();
    $('.search-field').val("");
    Backbone.history.navigate("/search/" + query, { trigger: true});
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
