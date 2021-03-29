$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        fixedNavigation: true
      })

    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))
    
})


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
        
        var type = $(this).parents("ul").data('type')
        $("input[name="+type+"_url]").val(image)
        if(type == 'bg'){
            $(".topbg_cover").css('background-image', 'url('+image+')');
            $("input[name=bg_url]").val(image);
        }else if(type == 'pr'){
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

    $(".uploaded_img_trash").off("click")
    $(".uploaded_img_trash").on("click", function(e){
        galleryImages.splice($(this).parents("li").index(), 1);
        $(this).parents("li").remove()
        syncImgGalleryPreview()
    })

    $(".uploaded_img_move").off("click")
    $(".uploaded_img_move").on("click", function(e){
        galleryImages = array_move(galleryImages,$(this).parents("li").index(), $(this).parents("li").index()-1)
        $(this).parents("li").insertBefore($(this).parents("li").prev())
        syncImgGalleryPreview()
    })

    $(".uploaded_caption").off("keyup")
    $(".uploaded_caption").on("keyup", function(e){
        var index = $(this).parents('li').index()
        $($("#image_gallery .img_gallery_wr")[index]).find('a').attr('data-title',e.target.value)
        galleryImages[index].title = e.target.value
        
    })
}

function changePreviewImages(url){
    $("input[name="+Upload.type+"_url]").val(url)
    if(Upload.type == 'bg'){
        $(".topbg_cover").css('background-image', 'url('+url+')');
    }else if(Upload.type == 'pr'){
        $(".page_profile").css('background-image', 'url('+url+')');
    }
}