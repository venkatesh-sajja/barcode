$(document).ready(function () {

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    bgPicSelectEvent()
    Upload.init()
    ColorPicker.init($(".primary_wrapper"), $(".topbg_cover"))

    $(".page_form input[type=datetime-local]").on("change keyup", function (e) {
        if (e.target.name == 'from_date') {
            changeOpenTime()
        } else if (e.target.name == 'to_date') {
            changeOpenTime()
        }
    })

})

function changeOpenTime() {
    var from_date = moment($("input[name=from_date]").val())
    var to_date = moment($("input[name=to_date]").val())

    if (to_date._isValid && from_date._isValid) {
        if (from_date < to_date) {
            if (from_date.format("DD-MM-YYYY") == to_date.format("DD-MM-YYYY")) {
                $(".from_to_date").hide()
                $(".single_day").show()

                $(".single_day strong").html(from_date.format("DD MMM, YYYY"))
                $(".single_day .open_time").html(from_date.format("hh:mm a").toUpperCase() + ' - ' + to_date.format("hh:mm a").toUpperCase())

            } else {
                $(".from_to_date").show()
                $(".single_day").hide()
                var text = '<span class="text-dark">' + to_date.format("DD MMM, YYYY") + '</span><br>' + to_date.format("hh:mm a").toUpperCase()
                $(".from_to_date .to_date").html(text)
                var text = '<span class="text-dark">' + from_date.format("DD MMM, YYYY") + '</span><br>' + from_date.format("hh:mm a").toUpperCase()
                $(".from_to_date .from_date").html(text)
            }
        } else {
            alert("From date should be greater than to date")
        }
    } else if (from_date._isValid) {
        $(".from_to_date").show()
        $(".single_day").hide()
        var text = '<span class="text-dark">' + from_date.format("DD MMM, YYYY") + '</span><br>' + from_date.format("hh:mm a").toUpperCase()
        $(".from_to_date .from_date").html(text)
    } else if (to_date._isValid) {
        $(".from_to_date").show()
        $(".single_day").hide()
        var text = '<span class="text-dark">' + to_date.format("DD MMM, YYYY") + '</span><br>' + to_date.format("hh:mm a").toUpperCase()
        $(".from_to_date .to_date").html(text)
    }

}

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
        var type = $(this).parents("ul").data('type')
        $("input[name="+type+"_url]").val(image)
        if (type == 'bg') {
            $(".topbg_cover img").attr('src', image);
        } else if (type == 'pr') {
            $(".page_profile").css('background-image', 'url(' + image + ')');
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




function changePreviewImages(url) {
    $("input[name="+Upload.type+"_url]").val(url)
    if (Upload.type == 'bg') {
        $(".topbg_cover img").attr('src', url);
    } else if (Upload.type == 'pr') {
        $(".page_profile").css('background-image', 'url(' + url + ')');
    }
}