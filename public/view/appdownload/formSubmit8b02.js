var _lastClickedEvent;
$(document).ready(function () {
    
    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))
})




/**
 * Bg image uploader
 */




function bgPicSelectEvent() {
    $(".qr_bg_wrapper li").off("click")
    $(".qr_bg_wrapper li").on("click", function (e) {
        if($(this).children('.qr_file_upload').length == 1 ){
            return
        }
        $(this).parents("ul").children("li").removeClass("active")
        $(this).addClass("active")
        var image = this.children[0].style['backgroundImage']
        image = image.replace('url("', '')
        image = image.replace('")', '')
        image = getFullUrlFromThumbnail(image)
        var type = $(this).parents("ul").data('type')
        if(type == 'bg'){
            $(".fb_cover img").attr('src', image);
            $("input[name=bg_url]").val(image)
        }else if(type == 'pr'){
            $("input[name=pr_url]").val(image)
            $(".page_profile").css('background-image', 'url('+image+')');
        }
    })
    $(".qr_bg_wrapper li").off('mousemove')
    $(".qr_bg_wrapper li").on('mousemove',function(e){
        $(this).find('.delete_image').show()
    })

    $(".qr_bg_wrapper li").off('mouseout')
    $(".qr_bg_wrapper li").on('mouseout',function(e){
        $(this).find('.delete_image').hide()
    })

    $('.uploaded_bg_image .delete_image').off('click')
    $('.uploaded_bg_image .delete_image').on('click', function(e){
        
    })
}

$(".submit_qr_code").on("click", function(e){
    var fieldsToSkip = ['primary_color', 'secondary_color', 'bg_url', 'pr_url', 'ld_url']
    var data = serializeFormObject($(".page_form"));
    var keys = Object.keys(data);
    var proceed = true;
    for(var i=0; i< keys.length;i++){
        if(fieldsToSkip.indexOf(keys[i])>-1){
            continue
        }
        if(data[keys[i]] == ""){
            if($("input[name="+keys[i]+"]").parent().children('.text-danger').length == 0){
                $("input[name="+keys[i]+"]").parent().append('<span class="text-danger">Input Required</span>')
            }
            proceed = false
        }else{
            $("input[name="+keys[i]+"]").parent().children('.text-danger').remove()
        }
    }
    if(proceed){
        $.post('/user/services/api', {
            cmd : 'saveQRCode', 
            formData : JSON.stringify(data),
            qrData : JSON.stringify(qrCodeParams),
        }, function(response){
            console.log(response)
        })
    }
})


function changePreviewImages(url){
    $("input[name="+Upload.type+"_url]").val(url)
    if(Upload.type == 'bg'){
        $(".fb_cover img").attr('src', url);
    }else if(Upload.type == 'pr'){
        $(".page_profile").css('background-image', 'url('+url+')');
    }
}