var _lastClickedEvent = null;

function download(ele = $("#download"), size = 1024) {
    downloadImage(size)
    return;
    qrCodeParams.size = size;
    qrCodeParams.callback = function (image) {

        var link = document.createElement('a');
        link.href = image;
        link.download = 'qrchimp.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        qrCodeParams.callback = undefined
        qrCodeParams.size = 1024
    }
    generate()
    // ele.attr('download', "qrchimp.png")
    // ele.attr('href', image)
    // var download = document.getElementById("download");

    // download.setAttribute("download", "qrchimp.png");
    // download.setAttribute("href", image);
}

function getQrImageUrl(short_url, callback) {
    qrCodeParams.callback = function (image) {

        fetch(image)
            .then(res => res.blob())
            .then(blob => {
                // var png = image.split(',')[1];
                // var file = new Blob([window.atob(png)], { type: 'image/png', encoding: 'utf-8' });
                // var file = new File(the_file, short_url + ".png", { type: 'image/png', encoding: 'utf-8' })
                var data = new FormData();

                data.append("file", blob, short_url + ".png");
                data.append("params", JSON.stringify([["l", 1024, 1024, 93, 0], ["m", 660, 660, 93, 0], ["t", 200, 200, 93, 0]]));//
                data.append("cmd", "uploadImage");
                data.append("consistent", true);
                data.append("dir", 'qr');
                $.ajax({
                    data: data,
                    type: "POST",
                    url: "/user/services/api",
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        if (!empty(response.data)) {
                            callback(response.data[0]['l'])
                        }
                    }
                });
            })
    }
    if (typeof qrCodeParams.logoImage == "string") {
        var img = new Image()
        var img_src = qrCodeParams.logoImage
        qrCodeParams.logoImage = img
        img.onload = () => {
            if (typeof qrCodeParams.backgroundImage == "string") {
                var bg_img = new Image()
                var img_src = qrCodeParams.backgroundImage
                qrCodeParams.backgroundImage = bg_img
                bg_img.onload = () => {
                    require(['/assets/js/chimpqr'], function (ChimpQR) {
                        //console.log(ChimpQR);
                        ChimpQR.create(qrCodeParams);
                    }
                    );
                };
                bg_img.src = img_src
            } else {
                require(['/assets/js/chimpqr'], function (ChimpQR) {
                    //console.log(ChimpQR);
                    ChimpQR.create(qrCodeParams);
                }
                );
            }
        };
        img.src = img_src
    } else if (typeof qrCodeParams.backgroundImage == "string") {
        var bg_img = new Image()
        var img_src = qrCodeParams.backgroundImage
        qrCodeParams.backgroundImage = bg_img
        bg_img.onload = () => {
            require(['/assets/js/chimpqr'], function (ChimpQR) {
                //console.log(ChimpQR);
                ChimpQR.create(qrCodeParams);
            }
            );
        };
        bg_img.src = img_src
    } else {
        generate()
    }


}


var logo = new Image();
var qrCodeParams = {
    text: "https://www.qrcodechimp.com/hello",
    size: 200,
    margin: 0,
    marginCentered: true,
    typeNumber: 4,
    colorDark: "#000",
    colorLight: "#000",
    /*correctLevel: 2, //QRErrorCorrectLevel.M,*/
    backgroundImage: undefined,
    bgImageClip: true,
    bgClipImageX: 103,
    bgClipImageY: 103,
    bgClipImageSize: 290,
    bgImageClipReposition: true,
    backgroundDimming: 'rgba(200,200,222,0.2)',


    logoImage: undefined,
    logoScale: 10,
    logoMargin: 10,
    logoCornerRadius: 0,
    logoCornerCornered: 1,
    whiteMargin: false, //--true, --"rgba(200,200,222,0.6)",


    //corner square
    positionOuterRadius: 0.5,
    positionOuterCornered: 0,
    positionInnerRadius: 0.2,
    positionInnerCornered: 0,
    alignOuterRadius: 0.5,
    alignOuterCornered: 0,
    alignInnerRadius: 0.1,
    alignInnerCornered: 0,
    timingInnerRadius: 0.3,
    timingInnerCornered: 0,

    dontClearBg: 0,
    dontDrawTimingProtector: 0,

    dataScale: 0.9,
    dataRadius: 0,
    dataCornered: 0,
    dataBorder: 0,
    dataBorderColor: "#000000", //--"auto"
    dataBorderAlpha: 0,
    mergeRowData: 1,
    mergeColData: 1,

    maskedDots: false,
    autoColor: false,
    autoColorBoost: false,
    binarize: false,
    binarizeThreshold: 128,
    gifBackground: undefined,
    callback: undefined,
    bindElement: 'qrcode'
}


if(typeof setSavedQRText !== "undefined" && typeof savedQrCodeParams != "undefined"){
    setSavedQRText()
}


logo.crossOrigin = "Anonymous";
logo.onload = () => {
    require(['/assets/js/chimpqr'], function (ChimpQR) {
        //console.log(ChimpQR);
        ChimpQR.create(qrCodeParams);
    }
    );
};
// logo.src = "/assets/images/qr-code.svg";
// generate()
function generate() {
    if (typeof qrCodeParams.logoImage != "undefined" && qrCodeParams.logoImage.length == 0) {
        qrCodeParams.logoImage = undefined
    }
    require(['/assets/js/chimpqr'], function (ChimpQR) {
        ChimpQR.create(qrCodeParams);
    });
    __lastSvgStr = "";
}

// $(".gntr-qr-btn").on("click", function () {
//     generate()
// })

$(".gntr_download_btn").on("click", function (e) {
    e.preventDefault()
    
    if (!amILoggedIn()) {
        $("#signup-free").modal("show");
        return;
    }

    if (_lastClickedEvent == e.originalEvent) {
        _lastClickedEvent = null;
        return
    }
    _lastClickedEvent = e.originalEvent;
    
    downloadImage();

    //download($(this))
})


// color
var colorCodeCount = 0;
$(".js_qr_color").on("click", function () {
    $(".js_qr_color").removeClass("active");
    $(this).addClass("active")

    var qr_color_random = ["#c51515", "#1568c5", "#75ba3e", "#892698", "#252c81"];

    if ($(this).hasClass("js_qr_color_random")) {
        qrCodeParams.colorDark = qr_color_random[colorCodeCount % qr_color_random.length]
        colorCodeCount += 1;
    }
    else {
        qrCodeParams.colorDark = $(this).children().css("background-color");
    }
    $("#colorpickerS1-input").val(qrCodeParams.colorDark);

    refreshQRCode();
    //generate();
})

// logo
$(".js_qr_logo").on("click", function () {
    //checkAndShowDesignerModal();
    $('#gntr_logo_tab-1').click();
    $("#desgin_qrcode_modal").modal("show");
    return;
    $(".js_qr_logo").removeClass("active");
    $(this).addClass("active")
    qrCodeParams.logoImage = logo;
    var qr_color_logo = ["/assets/images/scanme-cor.svg", "/assets/images/scanme.svg"];

    if ($(this).data('index') != undefined) {
        logo.src = qr_color_logo[$(this).data('index')];
    }
    else {
        qrCodeParams.logoImage = undefined;
    }
    
    generate()
})

function checkAndShowDesignerModal()
{
    if (amILoggedIn()) {
        //$($(this).data('target')).click()
        $("#desgin_qrcode_modal").modal("show")
    } else {
        $("#signup-free").modal("show")
    }
}
// sticker

$(".js_qr_sticker").on("click", function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (_lastClickedEvent == e.originalEvent) {
        _lastClickedEvent = null;
        return
    }
    _lastClickedEvent = e.originalEvent;
    $(".js_qr_sticker").removeClass("active");
    $(this).addClass("active")
    // qrCodeParams.logoImage=logo;
    var qr_sticker_bg = ["/assets/images/sticker/sticker_bg_1.png", "/assets/images/sticker/sticker_bg_2.png", "/assets/images/sticker/sticker_bg_3.png"];

    var bgImage = new Image()
    qrCodeParams.backgroundImage = bgImage;
    qrCodeParams.bgClipImageX = 103;
    qrCodeParams.bgClipImageY = 103;
    qrCodeParams.bgClipImageSize = 290;
    if ($(this).data('index') != undefined) {
        $(".js_qr_action_item[data-type=sticker]").removeClass("active");
        $(".js_qr_action_item[data-type=sticker][data-index=" + $(this).data('index') + "]").addClass("active");
        bgImage.src = qr_sticker_bg[$(this).data('index')];
    }
    else {
        //qrCodeParams.logoImage=undefined; 
    }
    $('#qr_rounded_bg').prop('checked', true);
    $("#roundedBGRadiusDiv").removeClass('hide');
    refreshQRCode();
    $('#gntr_sticker_tab-1').click();
    $("#desgin_qrcode_modal").modal("show");
    return;
    
    /*
    bgImage.onload = () => {
        require(['/assets/js/chimpqr'], function (ChimpQR) {
            ChimpQR.create(qrCodeParams);
        }
        );
    };
    */
    // 
});




//close sticker

$(".js_close_stiker").on("click", function (e) {
    e.preventDefault()
    if (_lastClickedEvent == e.originalEvent) {
        _lastClickedEvent = null;
        return
    }
    _lastClickedEvent = e.originalEvent;
    $(this).parent().removeClass("active")
    $(".js_qr_action_item[data-type=sticker]").removeClass("active");
    qrCodeParams.backgroundImage = undefined;
    $('#qr_rounded_bg').prop('checked', false);
    $("#roundedBGRadiusDiv").addClass('hide');
    refreshQRCode();
});
// $("#desgin_qrcode_modal").on('show.bs.modal', function(){
//     $(".gntr_qrcode_preview #qr_code").attr("id","qr_code1")
//  });
// Shpaes
$(".js_gntr_shape").on("click", function (e) {
    //checkAndShowDesignerModal();
    $('#gntr_shape_tab-1').click();
    $("#desgin_qrcode_modal").modal("show");
    return;
    
    e.preventDefault()
    e.stopPropagation()
    $(".js_gntr_shape").removeClass("active");
    $(this).addClass("active")

    if ($(this).hasClass("js_gntr_shape_default")) {

        qrCodeParams.positionOuterRadius = 0.5;
        qrCodeParams.positionOuterCornered = 0;
        qrCodeParams.positionInnerRadius = 0.2;
        qrCodeParams.positionInnerCornered = 0;
        qrCodeParams.alignOuterRadius = 0.5;
        qrCodeParams.alignOuterCornered = 0;
        qrCodeParams.alignInnerRadius = 0.1;
        qrCodeParams.alignInnerCornered = 0;
        qrCodeParams.timingInnerRadius = 0.3;
        qrCodeParams.timingInnerCornered = 0;

        qrCodeParams.dontClearBg = 0;
        qrCodeParams.dontDrawTimingProtector = 0;

        qrCodeParams.dataScale = 0.9;
        qrCodeParams.dataRadius = 0;
        qrCodeParams.dataCornered = 0;
        qrCodeParams.dataBorder = 0;
        qrCodeParams.dataBorderColor = "#000000";
        qrCodeParams.dataBorderAlpha = 0;
        qrCodeParams.mergeRowData = 1;
        qrCodeParams.mergeColData = 1;
    }
    else if ($(this).hasClass("js_gntr_shape_circle")) {
        qrCodeParams.positionOuterRadius = 1;
        qrCodeParams.positionOuterCornered = 0;
        qrCodeParams.positionInnerRadius = 0.5;
        qrCodeParams.positionInnerCornered = 0;
        qrCodeParams.alignOuterRadius = 1;
        qrCodeParams.alignOuterCornered = 0;
        qrCodeParams.alignInnerRadius = 0.5;
        qrCodeParams.alignInnerCornered = 0;
        qrCodeParams.timingInnerRadius = 0.3;
        qrCodeParams.timingInnerCornered = 0;

        qrCodeParams.dontClearBg = 0;
        qrCodeParams.dontDrawTimingProtector = 0;

        qrCodeParams.dataScale = 0.7;
        qrCodeParams.dataRadius = 0.6;
        qrCodeParams.dataCornered = 0;
        qrCodeParams.dataBorder = 2;
        qrCodeParams.dataBorderColor = "#000000";
        qrCodeParams.dataBorderAlpha = 0.05;
        qrCodeParams.mergeRowData = 1;
        qrCodeParams.mergeColData = 1;
    }
    else if ($(this).hasClass("js_gntr_shape_circle_2")) {
        qrCodeParams.positionOuterRadius = 1;
        qrCodeParams.positionOuterCornered = 0;
        qrCodeParams.positionInnerRadius = 0;
        qrCodeParams.positionInnerCornered = 0;
        qrCodeParams.alignOuterRadius = 1;
        qrCodeParams.alignOuterCornered = 0;
        qrCodeParams.alignInnerRadius = 0.5;
        qrCodeParams.alignInnerCornered = 0;
        qrCodeParams.timingInnerRadius = 0.3;
        qrCodeParams.timingInnerCornered = 0;

        qrCodeParams.dontClearBg = 0;
        qrCodeParams.dontDrawTimingProtector = 0;

        qrCodeParams.dataScale = 0.95;
        qrCodeParams.dataRadius = 0.6;
        qrCodeParams.dataCornered = 0;
        qrCodeParams.dataBorder = 2;
        qrCodeParams.dataBorderColor = "#000000";
        qrCodeParams.dataBorderAlpha = 0;
        qrCodeParams.mergeRowData = 1;
        qrCodeParams.mergeColData = 1;

    }
    else {

    }
    generate()
})

$(".download_qr_size a").on("click", function (e) {
    if (!amILoggedIn()) {
        $("#signup-free").modal("show");
        return;
    }
    var size = $(this).data('size')
    download($(this), size)

})

$(".popup_qr_preview_div .show_size").on('click', function (e) {
    $(".popup_qr_preview_div").hide()
    $(".qr_page_pre_more_popup").show()
})

$(".qr_page_pre_more_popup button").on('click', function (e) {
    $(".popup_qr_preview_div").show()
    $(".qr_page_pre_more_popup").hide()
})