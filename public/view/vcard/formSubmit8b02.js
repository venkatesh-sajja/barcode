$(document).ready(function () {
    $(".vcard_data input").on("keyup", function(e){
        checkAndReGenerate();
})
})

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
            $("#dynamic")[0].checked = false;
            // $("#dynamic").click()
            // codeClick = true
        }
      })
*/
function getVCardText()
{
    var name = ($("input[name=last_name]").val() != "" || $("input[name=first_name]").val() != "") ? `\r\nN:`+$("input[name=last_name]").val()+`;`+$("input[name=first_name]").val() : '';
    var fName = ($("input[name=first_name]").val() != "" || $("input[name=last_name]").val() != "") ? `\r\nFN:`+$("input[name=first_name]").val()+` `+$("input[name=last_name]").val() : '';
    var org = ($("input[name=company]").val() != "") ? `\r\nORG:`+$("input[name=company]").val() : '';
    var title = ($("input[name=designation]").val() != "") ? `\r\nTITLE:`+$("input[name=designation]").val() : '';
    var address = `\r\nADR:;;`;
    address += ($("input[name=street]").val() != "") ? $("input[name=street]").val() + ';' : ';';    
    address += ($("input[name=city]").val() != "") ? $("input[name=city]").val() + ';' : ';';
    address += ($("input[name=state]").val() != "") ? $("input[name=state]").val() + ';' : ';';
    address += ($("input[name=zipcode]").val() != "") ? $("input[name=zipcode]").val() + ';' : ';';
    address += ($("input[name=country]").val() != "") ? $("input[name=country]").val() : '';
    if(address == `\r\nADR:;;;;;;`) address = '';
    var tel = ($("input[name=tel_number]").val() != "") ? `\r\nTEL;WORK;VOICE:`+$("input[name=tel_number]").val() : '';
    var telC = ($("input[name=phone_number]").val() != "") ? `\r\nTEL;CELL:`+$("input[name=phone_number]").val() : '';
    var email = ($("input[name=email]").val() != "") ? `\r\nEMAIL;WORK;INTERNET:`+$("input[name=email]").val() : '';
    var url = ($("input[name=website]").val() != "") ? `\r\nURL:`+$("input[name=website]").val() : '';

    var text = `BEGIN:VCARD
VERSION:3.0`+name+fName+org+title+address+tel+telC+email+url+`
END:VCARD`;
//console.log(text);
return text;

/*var text = `BEGIN:VCARD
VERSION:3.0
N:`+$("input[name=last_name]").val()+`;`+$("input[name=first_name]").val()+`
FN:`+$("input[name=first_name]").val()+` `+$("input[name=last_name]").val()+`
ORG:`+$("input[name=company]").val()+`
TITLE:`+$("input[name=designation]").val()+`
ADR:;;`+$("input[name=street]").val()+`;`+$("input[name=city]").val()+`;`+$("input[name=state]").val()+`;`+$("input[name=zipcode]").val()+`;`+$("input[name=country]").val()+`
TEL;WORK;VOICE:`+$("input[name=tel_number]").val()+`
TEL;CELL:`+$("input[name=phone_number]").val()+`
EMAIL;WORK;INTERNET:`+$("input[name=email]").val()+`
URL:`+$("input[name=website]").val()+`
END:VCARD`;*/
}


var _timeoutId = null;
function checkAndReGenerate(e)
{
    if(__KEYUP_DELAY == undefined) __KEYUP_DELAY = 1000;
    
    if(_timeoutId != null) clearTimeout(_timeoutId);
    _timeoutId = setTimeout(function(){

        if($("input[id=dynamic]").is(":checked")) //the value is string, this is a wrong way of doing this
        {
            qrCodeParams.text = 'http://'+__short_url_domain+'/' + $("input[name=short_url]").val();
        }
        else
        {
            //console.log("resetting");
            qrCodeParams.text = getVCardText();
        }

        // refreshQRCode();
        //generate();
    }, __KEYUP_DELAY);
}



function setSavedQRText(){
    qrCodeParams.text = getVCardText()
}
