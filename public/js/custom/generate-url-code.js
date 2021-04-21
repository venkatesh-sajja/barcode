
var generate_url_code = function(){
    var onLoad = function () {
        appendGenerateUrlCode();
        saveQrCampaign()
        $(".show_loader").hide();

    }
    var appendGenerateUrlCode = function () {
        $('.gntr-qr-btn').on('click', function () {
            var url = $("[name='weburl']").val();
            getUrlQrCode(url);
        })
        $("input[name='weburl']").blur(function () {
            var url = $("[name='weburl']").val();
            getUrlQrCode(url);
        })
    }
    var getUrlQrCode = function (url) {
        
        // $(".show_loader").show();
        if (url !== '') {
            $.ajax({
                url: get_url_qrcode,
                data: {
                    url:url
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
        console.log($(".save_qr_campaign").length)
        $(document).on('click', '.save_qr_campaign',function(e){
            var value = $("[name='weburl']").val();
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
                        
                        // $(".gntr_qrcode_img").html(data)
                        $(".show_loader").hide();
                    }
                })
            }
        })
    }
    return {
        init: function () {
            onLoad()
        }
        
    }
}();
generate_url_code.init();