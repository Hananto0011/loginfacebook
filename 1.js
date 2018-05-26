$(document).ready(function () {
        
$("#tombollogin").click(function(){
    alert("click");
    $.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: {
        email: $("#uname").val(),
        password: $("#psw").val()
    },
    success: function(response){
        alert(response);
        console.log(response);
    }
});
}); 
});

function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());

    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }


    FB.getLoginStatus(function(response) {
    console.log(response);
});