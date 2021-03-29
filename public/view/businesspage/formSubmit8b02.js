var _lastClickedEvent;
$(document).ready(function () {

    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))

    $(".opening_hours .card-body").on("click", function(e){
        $(".opening_hours_toggle").toggleClass("rotate")
        if(!$(".opening_hours_toggle").hasClass("rotate")){
            $(".current_timing").show()
            $(".upcoming_timing").hide()
        }else{
            $(".current_timing").hide()
            $(".upcoming_timing").show()
        }
    })

    // $(".opening_hours_toggle").on("click", function(e){
    //     $(".opening_hours_toggle").toggleClass("rotate")
    //     if($(".opening_hours_toggle").hasClass("rotate")){
    //         $(".current_timing").show()
    //         $(".upcoming_timing").hide()
    //     }else{
    //         $(".current_timing").hide()
    //         $(".upcoming_timing").show()
    //     }

        
    // })


    $(".add_second_time").on("click", function(e){
        var name  =$(this).attr("href").replace("#","");
        if($(this).text() == '+'){
            $(this).text('-')
            $('input[name='+name+']').val(true)
        }else{
            $(this).text('+')
            $('input[name='+name+']').val(false)
        }
    })
    var week  =['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    $.each(week,function(index, day){
        $("input[name="+day+"]").off('click').on("click", function(e){
            $(e.target).val(e.target.checked == 'true')
        })
        $('.'+day+'_time1_open').datetimepicker({
            format: 'LT'
        });
        $('.'+day+'_time1_close').datetimepicker({
            format: 'LT',
            useCurrent: false //Important! See issue #1075
        });

        $('.'+day+'_time2_open').datetimepicker({
            format: 'LT'
        });
        $('.'+day+'_time2_close').datetimepicker({
            format: 'LT',
            useCurrent: false //Important! See issue #1075
        });
    })
    
    // $(".monday_time1_open").on("dp.change", function (e) {
    //     $('.monday_time1_close').data("DateTimePicker").minDate(e.date);
    // });
    // $(".monday_time1_close").on("dp.change", function (e) {
    //     $('.monday_time1_open').data("DateTimePicker").maxDate(e.date);
    // });
})




/**
 * Bg image uploader
 */




function bgPicSelectEvent() {
    $(".qr_bg_wrapper li").off("click")
    $(".qr_bg_wrapper li").on("click", function (e) {
        if ($(this).children('.qr_file_upload').length == 1) {
            return
        }
        $(this).parents("ul").children("li").removeClass("active")
        $(this).addClass("active")
        var image = this.children[0].style['backgroundImage']
        image = image.replace('url("', '')
        image = image.replace('")', '')
        image = getFullUrlFromThumbnail(image)
        var type = $(this).parents("ul").data('type')
        if (type == 'bg') {
            $(".topbg_cover img").attr('src', image);
            $("input[name=bg_url]").val(image)
        } else if (type == 'pr') {
            $("input[name=pr_url]").val(image)
            $(".page_profile").css('background-image', 'url(' + image + ')');
        } else if (type == 'ld') {
            $("input[name=ld_url]").val(image)
            // $(".page_profile").css('background-image', 'url(' + image + ')');
        }
    })
    $(".qr_bg_wrapper li").off('mousemove')
    $(".qr_bg_wrapper li").on('mousemove', function (e) {
        $(this).find('.delete_image').show()
    })

    $(".qr_bg_wrapper li").off('mouseout')
    $(".qr_bg_wrapper li").on('mouseout', function (e) {
        $(this).find('.delete_image').hide()
    })

    $('.uploaded_bg_image .delete_image').off('click')
    $('.uploaded_bg_image .delete_image').on('click', function (e) {

    })

   
}

$(".submit_qr_code").on("click", function (e) {
    var fieldsToSkip = ['primary_color', 'secondary_color', 'bg_url', 'pr_url', 'ld_url']
    var data = serializeFormObject($(".page_form"));
    var keys = Object.keys(data);
    var proceed = true;
    for (var i = 0; i < keys.length; i++) {
        if (fieldsToSkip.indexOf(keys[i]) > -1) {
            continue
        }
        if (data[keys[i]] == "") {
            if ($("input[name=" + keys[i] + "]").parent().children('.text-danger').length == 0) {
                $("input[name=" + keys[i] + "]").parent().append('<span class="text-danger">Input Required</span>')
            }
            proceed = false
        } else {
            $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
        }
    }
    if (proceed) {
        $.post('/user/services/api', {
            cmd: 'saveQRCode',
            formData: JSON.stringify(data),
            qrData: JSON.stringify(qrCodeParams),
        }, function (response) {
            console.log(response)
        })
    }
})


function changePreviewImages(url) {
    $("input[name="+Upload.type+"_url]").val(url)
    if (Upload.type == 'bg') {
        $(".topbg_cover img").attr('src', url);
    } else if (Upload.type == 'pr') {
        $(".page_profile").css('background-image', 'url(' + url + ')');
    }
}