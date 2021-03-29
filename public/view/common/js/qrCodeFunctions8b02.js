function saveQRImageToS3(callback = function(){}){
    var imageContainer = "#qrcode";
    // if($('#desgin_qrcode_modal').css("display") == "none"){
    //     imageContainer = "#qrcode_preview";
    // }
    fetch($(imageContainer).attr('src'))
            .then(res => res.blob())
            .then(blob => {
                // var png = image.split(',')[1];
                // var file = new Blob([window.atob(png)], { type: 'image/png', encoding: 'utf-8' });
                var formData = serializeFormObject($(".page_form"));
                var short_url = formData['short_url']
                if(short_url == undefined || short_url == "" || (formData['page'] == 'url' && empty(formData['dynamic']))){
                    short_url = (typeof selectedData != "undefined") ? selectedData['short_url_code'] : 0
                    if(short_url == 0){
                        short_url = formData['template_name'].replace(/ /g, "_").toLowerCase();
                    }
                }
                var data = new FormData();

                data.append("file", blob, short_url + ".png");
                data.append("params", JSON.stringify([["l", 1024, 1024, 93, 0], ["m", 660, 660, 93, 0], ["t", 200, 200, 93, 0]]));//
                data.append("cmd", "uploadImage");
                data.append("consistent", true);
                data.append("dir", 'qr');
                $.ajax({
                    data: data,
                    type: "POST",
                    url: "/user/services/api",
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        if (!empty(response.data)) {
                            if (typeof selectedElement != "undefined") {
                                selectedElement.parents('tr').find('.qrlist_qr_prev').children().attr("src", '');
                                selectedElement.parents('tr').find('.qrlist_qr_prev').children().attr("src", response.data[0]['l'] + '?v=' + Math.floor((Math.random() * 100) + 1));
                            }

                            // if($("#qrcode_preview").length == 1){
                            //     $("#qrcode_preview").attr("src", '');
                            //     $("#qrcode_preview").attr("src", response.data[0]['l'] + '?v=' + Math.floor((Math.random() * 100) + 1));
                            // }

                            callback()
                        }
                    }
                });
            })
}
function saveQROptions(id) {
    var _id = (typeof selectedData != "undefined") ? selectedData['_id'] : 0
    _id = _id == 'new' ? getUrlParameterByName('id', 0) : _id;
    function saveQROptionsCallback(data) {
        saveQRImageToS3()
    }

    function callAPI() {
        $.post('/user/services/api', {
            cmd: 'saveQROptions',
            _id: _id,
            qr_options: JSON.stringify(_qrOptions),
        }, function (response) {
            if (!empty(response.data)) {
                saveQROptionsCallback()
            }
        })
    }

    if (_id != 0) {
        callAPI()
    }
}

function saveQrCodeTemplate(page_config) {

    function saveQrCodeTemplateCallback(id) {
        $("input[name=id]").val(id)
        $("input[name=template_name]").val(page_config['template_name'])
        if(location.href.indexOf(id) < 0){
            let url = '/'
            if(page == 'url'){
                url = "/qr-code-generator-for-url/"
            }
            try {window.history.replaceState(null, null, window.location.href + url + id);}
            catch(e) {console.log(e)}
        }
        $("#template_name_modal").modal("hide")
        saveQRImageToS3(function(){
            _successPopup.showModal()
            _plan_popup.checkPlanStatus()
        })
        // alert("Saved Successfully")
    }
    function callAPI() {
        _qrOptions.qr_text = qrCodeParams.text
        $.post('/user/services/api', {
            cmd: 'saveQrCodeTemplate',
            _id: page_config['id'],
            page_config: JSON.stringify(page_config),
            qr_options: JSON.stringify(_qrOptions),
        }, function (response) {
            if (response.errorMsg == "RCP") {
                $("#signup-free").modal("show")
            } else if (!empty(response.data)) {
                saveQrCodeTemplateCallback(response.data)
            } else if (response.data == 0) {
                $(".campaign_name_qr_alert").text("Name Already Exists")
                $(".campaign_name_qr_alert").removeClass("d-none")
            }

            // }
        })
    }
    var _id = getUrlParameterByName('id', 0);
    callAPI()


}