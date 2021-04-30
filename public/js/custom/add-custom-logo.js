var add_custom_logo = function () {
    var onLoad = function () {
        appendUploadCustomLogoEvent();
        selectLogo();
        // getLogoQrCode();
    }
    var getLogoQrCode = function () {
        var image = $(".gntr_logo_scanme.active").attr('active');

    }
    var selectLogo = function () {
        $(document).on("click", ".gntr_logo_scanme", function () {
            var image = $(this).attr('data-image');
            $('.gntr_logo_scanme').removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
            } else {
                $(this).addClass('active')
            }
            getLogoQrCode();
        })
    }
    var getNewLogo = function (file_name) {
        var public_file_name = public_uploads + file_name;
        var image = '<img src="'+public_file_name+'"></img>'
        var new_logo = '<li class="gntr_logo_scanme js_qr_logo" data-index="2" data-image="'+file_name+'">'+image+'</li>';
        return new_logo;
    }
    var getLogoQrCode = function (text) {
        var image = $(".gntr_logo_scanme.active").attr('data-image');
        var text = $("#text-qr-code").val();
        debugger
        if (text !== '') {
            $.ajax({
                url: get_url_qrcode,
                data: {
                    url: text,
                    image:image
                },
                beforeSend:function() {
                    $(".show_loader").show()
                },
                type: 'GET',
                dataType: 'HTML',
                success: function (data) {
                    $(".gntr_qrcode_img").html(data)
                    $(".popup_qr_preview").html(data);
                    $(".show_loader").hide();
                }
            })
        }
    }
    var appendUploadCustomLogoEvent = function () {
        $(document).on("change", "#logoAddPic", function () {
            $.ajax({
                url: upload_custom_logo,
                data:new FormData($("#uploadLogoForm")[0]),
                dataType:'json',
                async:false,
                type:'post',
                processData: false,
                contentType: false,
                success:function(response){
                    if (response.status) {
                        var new_logo = getNewLogo(response.image);
                        $(".gntr_logo_list").append(new_logo)
                    }
                },
            })
        })
    }
    return {
        init: function () {
            onLoad();
        }
    }
}();
add_custom_logo.init()