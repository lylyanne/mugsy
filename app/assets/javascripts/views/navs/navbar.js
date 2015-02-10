EtsyClone.Views.Navbar = Backbone.View.extend({
  template: JST["navs/navbar"],
  tagName: 'li',
  className: 'dropdown',
  render: function () {
    var renderedContent = this.template({currentUser: CURRENT_USER});
    this.$el.html(renderedContent);
    return this;
  }
});
