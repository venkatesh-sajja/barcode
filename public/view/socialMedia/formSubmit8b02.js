var _lastClickedEvent;
let _required_inputs = ['headline']
$(document).ready(function () {
    
    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))

    $(".page_form input[type=text]").on("keyup",function(e){
        if(e.target.name.indexOf("link_label")>1){
            var type = e.target.name.split("_")[0]
            $(".pr_social_cards ."+type+"_card .header").text(e.target.value)
        }
    })

    $(".social_icon_list li").on('click',function(e){
        var type = $(this).data('type')
        
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $(".social_link_container ."+type).hide()
            $(".pr_social_cards ."+type.split('_')[0]+'_card').remove()
        }else{
            addSocialMediaLink(type.split('_')[0])
            $(this).addClass('active')
            $(".social_link_container ."+type).insertBefore($(".social_icon_list_container"));
            $(".social_link_container ."+type).show()
        }
    })
})




/**
 * Bg image uploader
 */



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
        "website" : {"icon" : "worldwide", "header":  "Visit our website", "title":"WebSite"},
        "whatsapp" : {"icon" : "whatsapp", "header":  "Whatsapp me", "title":"Whatsapp"},
        "location" : {"icon" : "pin", "header":  "Meet me at", "title":"Location"},
        "email" : {"icon" : "email", "header":  "Email me", "title":"Email"}
    }
    if($(".pr_social_cards ."+type+"_card").length == 0){
        var html = '<li class="'+type+'_card">\
                        <div class="card_list_xl_icon social_icon_fb float-left mr-2 mt-2">\
                            <i class="icon-'+cardConf[type]['icon']+'"></i>\
                        </div>\
                        <span class="sm-t header">'+cardConf[type]['header']+'</span>\
                        <div class="rg-t title">'+cardConf[type]['title']+'</div>\
                    </li>'
        $(".pr_social_cards").append(html)
    }
    

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
}



function changePreviewImages(url){
    $("input[name="+Upload.type+"_url]").val(url)
    if(Upload.type == 'bg'){
        $(".topbg_cover img").attr('src', url);
    }else if(Upload.type == 'pr'){
        $(".page_profile").css('background-image', 'url('+url+')');
    }
}