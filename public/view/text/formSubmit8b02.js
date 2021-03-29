$("#text-qr-code").on("keyup", function(e){
    qrCodeParams.text = e.target.value
    //generate();
    checkAndReGenerate(e);
});

$(".page_form").on("submit",function(e){
    e.preventDefault()
    //generate()
    checkAndReGenerate(e);

    return
})

var _timeoutId = null;
function checkAndReGenerate(e)
{
    if(__KEYUP_DELAY == undefined) __KEYUP_DELAY = 1000;
    //console.log("trying", $("input[name=dynamic]").val());
    if(_timeoutId != null) clearTimeout(_timeoutId);
    _timeoutId = setTimeout(function(){
        qrCodeParams.text = $("#text-qr-code").val();
        refreshQRCode();
        //generate();
    }, __KEYUP_DELAY);
}


function setSavedQRText(){
    qrCodeParams.text = savedQrCodeParams.text
}
