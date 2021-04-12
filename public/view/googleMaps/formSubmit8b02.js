$("input[name=weburl]").on("keyup",function(e){
    qrCodeParams.text = e.target.value
    $('#maps').attr('src',e.target.value)
    checkAndReGenerate(e);
})

// $(".page_form").on("submit",function(e){
//     e.preventDefault()
//     //generate()
//     checkAndReGenerate(e)
//     return
// })

/* moved to common.js
var codeClick = false;
$("#dynamic").on("change",function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    // if(codeClick){
    //     codeClick = false
    //     return
    // }
    $("input[name=dynamic]").val(e.target.checked)
    if(amILoggedIn()){
        checkAndReGenerate(e);
    }else{
        $("input[name=dynamic]").val(false);
        $("#signup-free").modal("show");
        
        
    }
})

$('#signup-free').on('hidden.bs.modal', function () {
    if(!amILoggedIn() && $("#dynamic")[0].checked){
        $("#dynamic")[0].checked = false
        // $("#dynamic").click()
        // codeClick = true
    }
    
  })
*/

var _timeoutId = null;
function checkAndReGenerate(e)
{
    //console.log("trying", $("input[name=dynamic]").val());
    if(__KEYUP_DELAY == undefined) __KEYUP_DELAY = 1000;
    
    if(_timeoutId != null) clearTimeout(_timeoutId);

    _timeoutId = setTimeout(function(){
        if($("input[id=dynamic]").is(":checked")) //the value is string, this is a wrong way of doing this
        {
            qrCodeParams.text = 'http://'+__short_url_domain+'/' + $("input[name=weburl]").val();
        }
        else
        {
            //console.log("resetting");
            qrCodeParams.text = $("input[name=weburl]").val();
        }
        $('#maps').attr('src', $("input[name=weburl]").val())
        //generate();
        // refreshQRCode();
    }, __KEYUP_DELAY);
}

function setSavedQRText(){
    qrCodeParams.text = savedQrCodeParams.weburl
}
