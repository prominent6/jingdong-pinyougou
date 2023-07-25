window.addEventListener("load", function () {
  var codeLogin = document.querySelector(".code-login-detail");
  var accountLogin = document.querySelector(".account-login-detail");
  var accountLoginA = document.querySelector(".account-login").children[0];
  var codeLoginA = document.querySelector(".code-login").children[0];
  codeLogin.style.display = "none";
  codeLoginA.addEventListener("click", () => {
    codeLogin.style.display = "block";
    accountLogin.style.display = "none";
  });
  accountLoginA.addEventListener("click", () => {
    codeLogin.style.display = "none";
    accountLogin.style.display = "block";
  });
});

// jquery
/* $(function () {
  $(".code-login-detail").hide();

  $(".account-login a").on("click", function () {
    $(".account-login-detail").show();
    $(".code-login-detail").hide();
  });
  $(".code-login a").on("click", function () {
    $(".code-login-detail").show();
    $(".account-login-detail").hide();
  });
}); */
