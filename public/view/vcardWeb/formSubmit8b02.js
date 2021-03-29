let _required_inputs = ['first_name',]
$(document).ready(function () {
    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper_color"), $(".topbg_cover_color"))

    $(".fb_form_fields input[type=text]").on("keyup",function(e){
        if(e.target.name == 'fb_headline'){
            $(".fb_pg_title").text(e.target.value)
        }else if(e.target.name == 'fb_subheadline'){
            $(".fb_pg_subtitle").text(e.target.value)
        }else if(e.target.name == 'fb_url'){
            var url = 'https://www.facebook.com/plugins/like.php?href='+encodeURIComponent(e.target.value)+'&width=87&layout=button_count&action=like&size=large&show_faces=true&share=false&height=21' 
            $(".fb_pg_likebtn_wrapper iframe").attr('src', url)
        }else if(e.target.name == 'fb_website'){
            $(".fb_pg_website a").text(e.target.value)
            $(".fb_pg_website a").attr('href', e.target.value)
        }
    })

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

    $(".social_icon_list li").on('click',function(e){
        var type = $(this).data('type').split("_")[0]
        
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $(".social_link_container ."+type).hide()
            $(".pr_social_cards ."+type+'_card').remove()
        }else{
            addSocialMediaLink(type)
            $(this).addClass('active')
            $(".social_link_container ."+type).insertBefore($(".social_icon_list_container"));
            $(".social_link_container ."+type).show()
        }
    })

})

function addSocialMediaLink(type){
    var cardConf = {
        "facebook" : {"icon" : "facebook1", "header":  "Become a fan", "title":"Facebook"},
        "instagram" : {"icon" : "instagram", "header":  "", "title":"Instagram"},
        "linkedin" : {"icon" : "linkedin", "header":  "", "title":"Linkedin"},
        "twitter" : {"icon" : "twitter", "header":  "", "title":"Twitter"},
        "skype" : {"icon" : "skype", "header":  "", "title":"skype"},
        "behance" : {"icon" : "behance", "header":  "", "title":"Behance"},
        "xing" : {"icon" : "xing", "header":  "", "title":"Xing"},
        "youtube" : {"icon" : "youtube", "header":  "Watch our videos", "title":"YouTube"},
        "whatsapp" : {"icon" : "whatsapp", "header":  "Whatsapp me", "title":"Whatsapp"},
        "location" : {"icon" : "pin", "header":  "Meet me at", "title":"Location"},
        "email" : {"icon" : "email", "header":  "Email me", "title":"Email"}
    }
    if($(".pr_social_cards ."+type+"_card").length == 0){
        var html = '<li class="' +type+ '_card  pb-3" onclick="">\
                        <div class="card_list_xl_icon social_icon_fb float-left mr-2 ">\
                            <i class="icon-'+((type != "facebook")?type:"facebook1")+'"></i>\
                        </div>\
                        <span></span>\
                        <div class="rg-t title">' +cardConf[type]["title"]+ '</div>\
                    </li>'
        $(".pr_social_cards").append(html)
    }
    

}

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
        $(".topbg_cover img").attr('src', url);
    }else if(Upload.type == 'pr'){
        $(".page_profile").css('background-image', 'url('+url+')');
    }
}