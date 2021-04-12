var generate_url_code = function(){
    var onLoad = function () {
        appendGenerateUrlCode();
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
                dataType: 'json',
                success: function (data) {
                    $("#qrcode_preview1").attr('src', image_url + data.image);
                    $(".show_loader").hide();
                }
            })
        }
        
        
    }
    return {
        init: function () {
            onLoad()
        }
        
    }
}();
generate_url_code.init();