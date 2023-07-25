$(function() {
    $(".code-login-detail").hide();

    $(".account-login a").on("click", function() {
        $(".account-login-detail").show();
        $(".code-login-detail").hide();
    })
    $(".code-login a").on("click", function() {
        $(".code-login-detail").show();
        $(".account-login-detail").hide();
    })
})