let __signup_callback =false
$(document).ready(function () {
    $(".signup_form input[type=radio]").on("change", function (e) {
        $(".signup_form input[name=name]").val('')
        $(".signup_form input[name=email]").val('')
        $(".signup_form input[name=pass]").val('')
        $(".signup_form input[name=verify_pass]").val('')

        if(e.target.value == "signup"){
            $(".signup_block").show()
            $(".signup_block input").prop('required',true)

            $("#forgot_password").hide()
        }else{
            $(".signup_block").hide()
            $(".signup_block input").prop('required',false)
            $("#forgot_password").show()
        }
        clearSignInErrorMsg();
    })
    $(".signup_form").on("submit", function (e) {
        e.preventDefault();
        clearSignInErrorMsg();
        var data = serializeFormObject($(this))
        if (data.login_type == "signup") {
            data.cmd = "signUp"
            if(data.pass !== data.verify_pass){
                $("#signInErrorMsg").html("Password doesn't match!");
                return
            }
        } else {
            data.cmd = "signIn"
        }
        $.post('/user/services/openapi', data, function (response) {
            if(!empty(response.data)){
                window.user_info = response.data
                logInUser(response.data) 
                clearSignInErrorMsg()
                $("#signInSuccessMsg").html("Successfully "+(data.cmd == 'signIn'?'Logged In.':'Signed Up.'))
                setTimeout(function(){
                    clearSignInErrorMsg()
                    $("#signup-free").modal("hide")

                    if(__signup_callback){
                        __signup_callback = false
                        if($(".submit_qr_code").length ==1){
                            $(".submit_qr_code").trigger("click")
                        }
                    }
                },2000)
            }
            else
            {
                $("#signInErrorMsg").html(response.errorMsg);
            }
            
        })

    })

    $("#forgot_password").on("click", function(e){
        e.preventDefault()
        $("#signup-free").modal("hide")
        $("#forgot_password_modal").modal("show")
    })

    $(".forgot_password_form").on("submit", function(e){
        e.preventDefault()
        var data = serializeFormObject($(this))
        $.post('/user/services/openapi', data, function (response) {
            if(response.errorCode == 0){
                $("#forgot_password_modal").modal("hide")
            }else{
                alert(response.errorMsg)
            }
            
        })
    })

    
})

function clearSignInErrorMsg()
{
    $("#signInErrorMsg").html('');
    $("#signInSuccessMsg").html('');
}

function logout(){
    eraseCookie("userwork")
    eraseCookie("login")
    eraseCookie("email")
    logOutUser()
    location.href = '/'
}