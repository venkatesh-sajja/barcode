$(".page_form input").on("keyup",function(e){
    checkAndReGenerate(e)
})

var _timeoutId = null;
function checkAndReGenerate(e)
{
    if(__KEYUP_DELAY == undefined) __KEYUP_DELAY = 1000;
    //console.log("trying", $("input[name=dynamic]").val());
    if(_timeoutId != null) clearTimeout(_timeoutId);
    _timeoutId = setTimeout(function(){

        var sms_mobile = $("#sms_mobilenumner")[0].value
        var sms_msg = $("#sms_message")[0].value
        var sms = 'SMSTO:'+sms_mobile+':'+sms_msg
        qrCodeParams.text = sms 

        refreshQRCode();
        //generate();
    }, __KEYUP_DELAY);
}


function setSavedQRText(){
    qrCodeParams.text =  'SMSTO:'+savedQrCodeParams.phone_no+':'+savedQrCodeParams.message
}
