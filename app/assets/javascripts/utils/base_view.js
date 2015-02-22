Backbone.BaseView = Backbone.View.extend({
  showErrors: function(response) {
    this.$('.errors-div').show();
    _(response.responseJSON).each(function (errors, name) {
      _(errors).each(function (message) {
        var $li = $('<li></li>');
        $li.text(name + " "+ message);
        $('.errors').append($li);
      })
    });
  },

  hideErrors: function () {
    this.$('.errors').empty();
    this.$('.errors-div').hide();
  },
});
