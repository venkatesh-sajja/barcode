$("input[name=weburl]").on("keyup",function(e){
    qrCodeParams.text = e.target.value
    checkAndReGenerate()
})

$(".page_form").on("submit",function(e){
    e.preventDefault()
    checkAndReGenerate()
    return
})

/* moved to common.js
var codeClick = false;
$("#dynamic").on("change",function(e){
    e.preventDefault()
    e.stopImmediatePropagation()
    // if(codeClick){
    //     codeClick = false
    //     return
    // }
    $("input[name=dynamic]").val(e.target.checked)
    if(amILoggedIn()){
        
    }else{
        $("input[name=dynamic]").val(false)
        $("#signup-free").modal("show")
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
        //generate();
        refreshQRCode();
    }, __KEYUP_DELAY);
}

function setSavedQRText(){
    qrCodeParams.text = savedQrCodeParams.weburl
}
