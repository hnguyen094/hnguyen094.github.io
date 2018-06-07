(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
        console.log("on submit");
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });


    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);

function makefakeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
var googleUser_g;
function onSuccess(googleUser) {
  googleUser_g = googleUser;
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  const profile = googleUser.getBasicProfile();
  let body = {}
  body["username"] = profile.getEmail();
  body["password (hashed)"] = md5.create().update(makefakeid()).hex();
  body["name"] = profile.getName();
  fetch('https://datax-server.herokuapp.com/api', {
  "method": "POST",
  "body": JSON.stringify(body),
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json"
    }
  });
}
function onFailure(error) {
  console.log(error);
}

const scopes = "https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/adexchange.seller.readonly https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/adsense.readonly profile email"

function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': scopes,
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}
