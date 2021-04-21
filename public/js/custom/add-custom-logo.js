var add_custom_logo = function () {
    var onLoad = function () {
        appendUploadCustomLogoEvent();
    }
    var getNewLogo = function (file_name) {
        var file_name = public_uploads + file_name;
        var image = '<img src="'+file_name+'"></img>'
        var new_logo = '<li class="gntr_logo_scanme js_qr_logo" data-index="2">'+image+'</li>';
        return new_logo;
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