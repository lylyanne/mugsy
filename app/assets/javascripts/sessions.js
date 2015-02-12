$( document ).ready(function() {
  $('.demo-user-login').click(fillInDemoUser);

  function fillInDemoUser (event) {
    event.preventDefault();

    $('#session_email').val('user4@user.com');
    $('#session_password').val('password');
    var $form = $('.login-form');
    $form.submit();
  }
});
