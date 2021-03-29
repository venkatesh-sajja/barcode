$(document).ready(function () {
    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))

    var rating_html = {
        "like" : `<ul class="rating_icons">
                    <li class="thumb_like"><i class="icon-like"></i></li>
                    <li class="thumb_dislike"><i class="icon-dislike"></i></li>
                </ul>`,
        "star" : `<ul class="rating_icons rating_stars">
                        <li class=""><i class="icon-star"></i></li>
                        <li class=""><i class="icon-star"></i></li>
                        <li class=""><i class="icon-star"></i></li>
                        <li class=""><i class="icon-star"></i></li>
                        <li class=""><i class="icon-star"></i></li>
                    </ul>`,
        "smiley" : `<ul class="rating_icons">
                    <li class="thumb_like"><i class="icon-happy"></i></li>
                    <li class="thumb_dislike"><i class="icon-sad"></i></li>
                </ul>`,
    }
    $(".rating_type li").on("click",function(e){
        $(".rating_type li").removeClass("active")
        $(this).addClass("active")
        $("input[name=rating_type]").val($(this).data("type"))
        $($('.give_rating .col-12')[0]).html(rating_html[$(this).data("type")])
    })

})



/**
 * Bg image uploader
 */

function initRatingEvents(){
    $(".give_rating ")
}
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
            $(".topbg_cover img").attr('src', image);
        }else if(type == 'pr'){
            $(".fb_pg_profilepic").css('background-image', 'url('+image+')');
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




function changePreviewImages(url){
    $("input[name="+Upload.type+"_url]").val(url)
    if(Upload.type == 'bg'){
        $(".topbg_cover img").attr('src', url);
    }else if(Upload.type == 'pr'){
        $(".fb_pg_profilepic").css('background-image', 'url('+url+')');
    }
}