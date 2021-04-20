var qr_code_for_text = function () {
    var onLoad = function () {
        appendGenerateTextCodeEvent();
        saveQrCampaign()
    }
    var appendGenerateTextCodeEvent = function () {
        
        $("#text-qr-code").blur(function () {
            var text = $("#text-qr-code").val();
            getUrlQrCode(text);
        })
    }
    var getUrlQrCode = function (text) {
        if (text !== '') {
            $.ajax({
                url: get_url_qrcode,
                data: {
                    url:text
                },
                beforeSend:function() {
                    $(".show_loader").show()
                },
                type: 'GET',
                dataType: 'HTML',
                success: function (data) {
                    $(".gntr_qrcode_img").html(data)
                    $(".show_loader").hide();
                }
            })
        }
    }
    var saveQrCampaign = function () {
        $(document).on('click', '.save_qr_campaign',function(e){
            var value = $("#text-qr-code").val();
            var name = $("#campaign_name_qr").val();
            
            if (value !== '') {
                $.ajax({
                    url: save_campaign,
                    data: {
                        value: value,
                        qr_type: qr_type,
                        name:name
                    },
                    beforeSend:function() {
                        $(".show_loader").show()
                    },
                    method: 'GET',
                    dataType: 'JSON',
                    success: function (data) {
                        $("#template_name_modal").modal('hide')
                        $(".show_loader").hide();
                    }
                })
            }
        })
    }
    return {
        init:onLoad()
    }
}();