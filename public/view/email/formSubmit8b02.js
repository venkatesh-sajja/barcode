$(".page_form input").on("keyup",function(e){
    var mail = $("#email_id")[0].value
    var subject = $("#email_sub")[0].value
    var message = $("#email_message")[0].value

    var text = 'mailto:'+mail+'?subject='+subject+'&body='+message
    qrCodeParams.text = text
    checkAndReGenerate(e)
})

var _timeoutId = null;
function checkAndReGenerate(e)
{
    if(__KEYUP_DELAY == undefined) __KEYUP_DELAY = 1000;
    //console.log("trying", $("input[name=dynamic]").val());
    if(_timeoutId != null) clearTimeout(_timeoutId);
    _timeoutId = setTimeout(function(){
        // qrCodeParams.text = $("#text-qr-code").val();
        refreshQRCode();
        //generate();
    }, __KEYUP_DELAY);
}


function setSavedQRText(){
    qrCodeParams.text = 'mailto:'+savedQrCodeParams.email_id+'?subject='+savedQrCodeParams.email_sub+'&body='+savedQrCodeParams.email_message
}
