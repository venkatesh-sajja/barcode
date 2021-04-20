let subdomain = location.host.split('.')[0]
let __short_url_domain = 'l.ntgs.us';
if (subdomain == 'www') {
    __short_url_domain = 'q.ntgs.us';
} else if (subdomain == 'dev') {
    __short_url_domain = 'qd.ntgs.us';
}


function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


var _lastClickedEvent;
var pageTitles = {
    "url": { "title": "Web Url", "type": "static" },
    "text": { "title": "Text", "type": "static" },
    "email": { "title": "Email", "type": "static" },
    "sms": { "title": "SMS", "type": "static" },
    "facebook": { "title": "SMS", "type": "static" },
}
window.addEventListener("load", function (event) {

});
var campaignData = null;
var static_short_url = '';
var TotalClicksAllowedCounter = 0;
function showDesignPopUp(idSelector) {
    $(idSelector).click();
    $("#desgin_qrcode_modal").modal("show");
}
$(document).ready(function () {
    $(".open_design_code_popup").on("click", function(e){
        if (amILoggedIn() || ++TotalClicksAllowedCounter <= 5) {
            $($(this).data('target')).click()
            $("#desgin_qrcode_modal").modal("show")
        } else {
            $("#signup-free").modal("show")
        }
    })
    
    if ($("#page_content").length == 1) {
        // $("#page_content").Editor();
        $(document).on('focusin', function (e) {
            if ($(".tox-dialog-wrap").length) {
                e.stopImmediatePropagation();
            }
        });

        var TinymceEditor = tinymce.init({
            selector: "#page_content",
            // mode : "exact",
            menubar: false,
            branding: false,
            height: "480",
            statusbar: false,
            content_css: '../assets/css/bootstrap.min.css',
            // skin : "o2k7",
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table directionality emoticons template paste formatpainter autoresize"
            ],
            // toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
            // toolbar: 'undo redo | styleselect formatpainter | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code',
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media  | forecolor backcolor emoticons | code | formatpainter',
            //valid_children : "+head[style],+body[style]",
            valid_children: "+body[style]",
            valid_elements: '+*[*]',
            autoresize_min_height: 500,
            autoresize_max_height: 2000,
            forced_root_block: "",
            setup: function (editor) {
                editor.on('Load', function (e) {
                    window.setTimeout(function () {
                        // TinymceEditor.resizeActiveEditor(300, 100);
                    }, 3000);
                });
            }
        });
    }
    if ($("input[name=short_url]").length == 1) {
        if (typeof savedQrCodeOptions != "undefined" && savedQrCodeOptions != null) {
            _qrOptions = savedQrCodeOptions;
        } else if (typeof savedQrCodeParams != "undefined" && savedQrCodeParams != null) {
            qrCodeParams = savedQrCodeParams
            if (qrCodeParams.logoImage != undefined) {
                var img = new Image()
                var img_src = qrCodeParams.logoImage
                qrCodeParams.logoImage = img
                img.onload = () => {
                    if (qrCodeParams.backgroundImage != undefined) {
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
            } else if (qrCodeParams.backgroundImage != undefined) {
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
        } else {
            // qrCodeParams.text = 'http://'+__short_url_domain+'/' + $("input[name=short_url]").val();
            // generate()
        }


    }
    $(".js_qr_preview_btn").on("click", function () {
        $(".qr_page_preview").toggleClass("d-none");
        $(".qr_page_code_preview").toggleClass("d-none");
        if ($(this).data("type") == "qr") {
            $(this).data("type", "pr");
            $(".js_qr_preview_btn i").attr('class', 'icon-mobile ml-2');
            $(".js_qr_preview_btn span").text('Page');
            $(".qr_page_pre_more").hide();
        }
        else {
            $(this).data("type", "qr");
            $(".js_qr_preview_btn i").attr('class', 'icon-qrcode ml-2');
            $(".js_qr_preview_btn span").text('QR Code');
        }

    })

    $(".js_qr_page_more").on("click", function () {
        $(".qr_page_pre_more").show();
    })

    $(".qr_page_pre_more button").on("click", function () {
        $(".qr_page_pre_more").hide();
    })


    $('.backbtn_qrcodetype').on('click', function (e) {
        e.stopImmediatePropagation()
        setTimeout(function () {
            window.history.back();
        }, 100)

    })

    $(".qr_file_upload").on("click", function (e) {
        if (amILoggedIn()) {
            if ($(this).parents("ul").children(".uploaded_bg_image").length < 50) {
                Upload.ele = this
                Upload.type = $(this).parents("ul").data('type')
                if (Upload.type == undefined) {
                    Upload.type = "ga"
                }
                $(this).parents("ul").children(".image_uploader").click()
            }
        }
        else {
            $("#signup-free").modal("show")
        }
    })

    $(".submit_qr_code").on("click", function (e) {
        //$("#afterSaveThankyouModal").modal("show");
        //return;
        if (amILoggedIn()) {

            var fieldsToSkip = ['primary_color', 'secondary_color', 'bg_url', 'pr_url', 'ld_url', 'short_url', 'template_name', 'playstore_url', 'appstore_url', 'dynamic']
            var data = serializeFormObject($(".page_form"));
            var keys = Object.keys(data);
            var proceed = true;
            for (var i = 0; i < keys.length; i++) {
                $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                if (fieldsToSkip.indexOf(keys[i]) > -1) {
                    continue
                }

                if(typeof _required_inputs != "undefined" && _required_inputs.indexOf(keys[i]) == -1){
                    continue
                }
                if (data[keys[i]] == "") {
                    if (data['page'] == 'url') {
                        if (keys[i] == "dynamic") {
                            continue
                        }
                    }
                    if (data['page'] == 'vcard') {
                        if (keys[i] != "first_name" && keys[i] != "phone_number") {
                            continue
                        }
                    }
                    if ($("input[name=" + keys[i] + "]").length == 1 && $("input[name=" + keys[i] + "]").parent().children('.text-danger').length == 0) {
                        $("input[name=" + keys[i] + "]").parent().append('<span class="text-danger">Input Required</span>')
                    } else if ($("textarea[name=" + keys[i] + "]").length == 1 && $("textarea[name=" + keys[i] + "]").parent().children('.text-danger').length == 0) {
                        $("textarea[name=" + keys[i] + "]").parent().append('<span class="text-danger">Input Required</span>')
                    }
                    if (data['page'] == 'socialMedia' || data['page'] == 'vcardWeb') {
                        if (keys[i].indexOf("_link_") > 0 || keys[i].indexOf("_url") > 0) {
                            if ($("." + keys[i].split("_")[0] + "_link").css("display") == "none" || $(".row." + keys[i].split("_")[0]).css("display") == "none") {
                                $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                                continue
                            }
                        }
                    }
                    if (data['page'] == 'businesspage') {
                        week_days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
                        if (week_days.indexOf(keys[i].split("_")[0]) > -1) {
                            if ($("input[name=" + keys[i].split("_")[0] + "]").val() == 'true') {
                                if (keys[i].indexOf("_time2_") > 0) {
                                    if (($("input[name=" + keys[i].split("_")[0] + "_time2]").val() == 'true')) {
                                        $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                                        continue
                                    }
                                }

                            } else {
                                $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                                continue
                            }

                        }
                    }

                    proceed = false
                } else if(keys[i] == "email_id"){
                    if(!isValidEmailAddress(data[keys[i]])){
                        if ($("input[name=" + keys[i] + "]").length == 1 && $("input[name=" + keys[i] + "]").parent().children('.text-danger').length == 0) {
                            $("input[name=" + keys[i] + "]").parent().append('<span class="text-danger">Invalid Email</span>')
                        } 
                        proceed = false
                    }else{
                        $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                    }
                } else{
                    $("input[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                    $("textarea[name=" + keys[i] + "]").parent().children('.text-danger').remove()
                }
            }
            if(!proceed)
            {
                showAlertModal("Input Required", "Please check and fill the mandatory fields to proceed.");
            }
            if (proceed) {
                if (data['page'] == 'socialMedia' || data['page'] == 'vcardWeb') {
                    var arr = $(".social_icon_list li.active")
                    data['link_order'] = [];
                    for (var i = 0; i < arr.length; i++) {
                        data['link_order'].push($(arr[i]).data('type').split("_")[0])
                    }
                    if(typeof galleryImages != "undefined")
                        data['images'] = galleryImages;
                } else if (data['page'] == 'gallery' || data['page'] == 'image'|| data['page'] == 'menu') {
                    // var imagesDiv = $(".list_uploaded_img").children()
                    // for (var i = 0; i < imagesDiv.length; i++) {
                    //     debugger
                    // }
                    data['images'] = galleryImages;
                }


                campaignData = data
                var short_url;
                if (campaignData['template_name'] == '') {
                    $("#template_name_modal").modal("show")
                    return

                } else {
                    if ($("input[name=short_url]").length == 1) {
                        short_url = $("input[name=short_url]").val()
                    } else {
                        short_url = campaignData['template_name']
                        short_url = short_url.toLocaleLowerCase()
                        short_url = short_url.replace(/ /g, '_');
                    }
                    showLoaderOnBlock()

                    if (typeof _qrOptions != "undefined") {
                        saveQrCodeTemplate(campaignData)
                    } else {
                        // $.post('/user/services/api', {
                        //     cmd: 'saveQRCode',
                        //     qr_img: '',
                        //     formData: JSON.stringify(campaignData),
                        //     qrData: JSON.stringify(qrCodeParams),
                        // }, function (response) {
                        //     // if (!empty(response.data)) {
                        //     if (response.errorMsg == "RCP") {
                        //         $("#signup-free").modal("show")

                        //     } else if (!empty(response.data)) {
                        //         getQrImageUrl(short_url, function () {
                        //             hideLoader()
                        //             location.href = '/user/dashboard'
                        //         })
                        //     } else if (response.data == 0) {
                        //         $(".campaign_name_qr_alert").text("Name Already Exists")
                        //         $(".campaign_name_qr_alert").removeClass("d-none")
                        //     }

                        //     // }
                        // })
                    }

                }




            }
        } else {
            $("#signup-free").modal("show");
            __signup_callback = true
        }
    })

    // $(".save_qr_campaign").on("click", function (e) {
    //     if ($("input[name=short_url]").length == 1 && !(campaignData['page'] == "url" && (campaignData['dynamic'] == '' || campaignData['dynamic'] == false))) {
    //         var short_url = $("input[name=short_url]").val()
    //     } else {
    //         var short_url = $("#campaign_name_qr").val()
    //         short_url = short_url.toLocaleLowerCase()
    //         short_url = short_url.replace(/ /g, '_');
    //     }
    //     showLoaderOnBlock()
    //     $(".campaign_name_qr_alert").addClass("d-none")
    //     if ($("#campaign_name_qr").val() == '') {
    //         $(".campaign_name_qr_alert").text("Name cannot be empty")
    //         $(".campaign_name_qr_alert").removeClass("d-none")
    //         hideLoader()
    //         return
    //     }
    //     campaignData['template_name'] = $("#campaign_name_qr").val()
    //     if (typeof _qrOptions != "undefined") {
    //         saveQrCodeTemplate(campaignData)
    //     } else {
    //         $.post('/user/services/api', {
    //             cmd: 'saveQRCode',
    //             qr_img: '',
    //             formData: JSON.stringify(campaignData),
    //             qrData: JSON.stringify(qrCodeParams),
    //         }, function (response) {
    //             // if (!empty(response.data)) {
    //             if (response.errorMsg == "RCP") {
    //                 $("#signup-free").modal("show")

    //             } else if (!empty(response.data)) {
    //                 getQrImageUrl(short_url, function () {
    //                     hideLoader()
    //                     location.href = '/user/dashboard'
    //                 })
    //             } else if (response.data == 0) {
    //                 $(".campaign_name_qr_alert").text("Name Already Exists")
    //                 $(".campaign_name_qr_alert").removeClass("d-none")
    //             }

    //             // }
    //         })
    //     }
    // })

    $("#campaign_name_qr").on("keyup", function (e) {
        if (e.target.value == '') {
            $(".campaign_name_qr_alert").removeClass("d-none")
            $(".campaign_name_qr_alert").text("*Field required")
        } else {
            $(".campaign_name_qr_alert").addClass("d-none")
        }
    })

    $('#desgin_qrcode_modal').on('hidden.bs.modal', function (e) {
        
        if (typeof _qrOptions != "undefined") {
            if(QrOptionsUtils.isDesignDataEdited && location.pathname.indexOf("dashboard") > 0){
                _designEditConfirmPopup.showModal()
                return;
            }
        }
        if (typeof _qrOptions != "undefined") {
            saveQROptions();
            return;
        }
        var short_url = qrCodeParams.text.split('/')[qrCodeParams.text.split('/').length - 1]
        if (typeof selectedElement != "undefined" && selectedElement.parents(".card-body").find(".qrlist_link").css("opacity") == '0') {
            short_url = selectedElement.parents(".card-body").find(".qrlist_name").text()
            short_url = (short_url.replace(/ /g, '_')).toLowerCase()
        }

        if (qrCodeParams.logoImage) {
            qrCodeParams.logoImage = qrCodeParams.logoImage.src
        }

        if (qrCodeParams.backgroundImage) {
            qrCodeParams.backgroundImage = qrCodeParams.backgroundImage.src
        }
        var id = (typeof selectedElement != "undefined") ? selectedElement.parents('.qrlist_card').data('id') : $("input[name=id]").val()
        if (id == 'new') {
            return
        }
        $.post('/user/services/api', {
            cmd: 'saveQRparams',
            id: id,
            qrData: JSON.stringify(qrCodeParams),
        }, function (response) {
            if (!empty(response.data)) {

                getQrImageUrl(short_url, function (url) {
                    // debugger
                    if (typeof selectedElement != "undefined") {
                        selectedElement.parents('.qrlist_card').find('.qrlist_qr_prev').children().attr("src", '');
                        selectedElement.parents('.qrlist_card').find('.qrlist_qr_prev').children().attr("src", url + '?v=' + Math.floor((Math.random() * 100) + 1));
                    }
                    // setTimeout(function(){
                    //     debugger

                    // },100)

                })

            }
        })

    })

    $(".load_more_options").on("click", function (e) {
        e.preventDefault()
        e.stopImmediatePropagation()
        // if (amILoggedIn()) {
        //     location.href = '/user/createTemplate'
        // } else {
        //     $("#signup-free").modal("show")
        // }

        location.href = '/user/createTemplate'
    })

    if (readCookie('privacyAccepted') != 'Y') {
        $('body').append(`<div class="cookies_msg" id="cookies_div">
                            <strong>Privacy & Cookies:</strong> This site uses cookies. By continuing to use this website, you agree to their use. 
                            To find out more, including how to control cookies, see here : <a href="/privacy">Cookie Policy</a> <a class="cookies_accept" onclick="acceptClose()">Accept & Close</a>
                            </div>`);
    }

    $(".admin_edit").on("click", function (e) {
        loadPageSettings()

    })

    $(".save_page_setting").on("click", function (e) {
        e.preventDefault()
        var formData = serializeFormObject($(".page_setting_form"))
        formData.page_content = tinyMCE.activeEditor.getContent();
        var data = {
            cmd: "savePageSettings",
            formData: JSON.stringify(formData)
        }
        $.post('/user/services/api', data, function (response) {
            if (!empty(response.data)) {
                location.reload();
            }

        })
    })

    $(".gntr_sticker_list_more").on("click", function (e) {
        if (amILoggedIn() || ++TotalClicksAllowedCounter <= 5) {
            $($(this).data('target')).click()
            $("#desgin_qrcode_modal").modal("show")
        } else {
            $("#signup-free").modal("show")
        }
    })

    $(".gntr_custom_link").on("click", function (e) {
        if (amILoggedIn() || ++TotalClicksAllowedCounter <= 5) {
            $($(this).data('target')).click()
            $("#desgin_qrcode_modal").modal("show")
        } else {
            $("#signup-free").modal("show")
        }
    })

    // $(".gntr_custom_link").on("click", function (e) {
    //     if (amILoggedIn()) {
    //         $("#desgin_qrcode_modal").modal("show")
    //     } else {
    //         $("#signup-free").modal("show")
    //     }
    // })

    $("#signup-free").on('shown.bs.modal', function (e) {
        $("input[name=login_type]").prop("checked", false)
        $(".signup_form input[name=name]").val('')
        $(".signup_form input[name=email]").val('')
        $(".signup_form input[name=pass]").val('')
        $(".signup_form input[name=verify_pass]").val('')
        if ($(e.relatedTarget).text() == 'Login') {
            $("input[name=login_type][value=login]").prop("checked", true)
            $(".signup_block").hide()
            $("#forgot_password").show()
        } else {
            $("input[name=login_type][value=signup]").prop("checked", true)
            $(".signup_block").show()
            $("#forgot_password").hide()
        }
    });


    $("#dynamic").on("change",function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $("input[name=dynamic]").val(e.target.checked)
        if(amILoggedIn()){
            checkAndReGenerate(e);
        }else{
            $("input[name=dynamic]").val(false);
            $("#signup-free").modal("show");
        }
    })

    $('#signup-free').on('hidden.bs.modal', function () {
        if(!amILoggedIn() && $("#dynamic").length && $("#dynamic")[0].checked){
            $("#dynamic")[0].checked = false;
            // $("#dynamic").click()
            // codeClick = true
        }
      })

      $('.gntr-qr-btn').on("click",function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        // recreateQRCode();
    })

    $("#step_by_step_guide_btn").on("click", function(e){
        e.preventDefault()
        let ele = document.getElementById("step_by_step_guide")
        if(ele){
            ele.scrollIntoView()
        }
    })
})


function acceptClose() {
    $('#cookies_div').hide();
    createCookie('privacyAccepted', 'Y', 60);
}

function loadPageSettings() {
    var data = {
        cmd: "fetchPageSettings",
        page_id: page
    }
    $.post('/user/services/api', data, function (response) {
        if (!empty(response.data)) {
            $(".page_setting_form input[name=page_title]").val(response.data.page_title)
            // $(".Editor-editor").html(response.data.page_content)
            $(".page_setting_form input[name=page_description]").val(response.data.page_description)
            $(".page_setting_form input[name=page_keyword]").val(response.data.page_keyword)
            $(".page_setting_form input[name=page_og]").val(response.data.page_og)
            tinymce.activeEditor.setContent(response.data.page_content);
        }
        $("#page_setting").modal("show")

    })
}

function getFullUrlFromThumbnail(url) {
    var temp = url.split('_t.');
    if (temp.length == 1) {
        return url;
    } else {
        return temp.join('.');
    }
}

function deepCopy(aObject) {
    if (!aObject) {
        return aObject;
    }
    if (typeof aObject == "object" || typeof aObject == "array") //the type of array too is object, but just in case
    {
        let v;
        let bObject = Array.isArray(aObject) ? [] : {};
        for (const k in aObject) {
            if (aObject.hasOwnProperty(k)) {
                v = aObject[k];
                bObject[k] = (typeof v === "object") ? deepCopy(v) : v;
            }
        }
        return bObject;
    }
    return aObject;
}

function extractDataFromArray(dataArr, paramsArr, defaultRetVal = '') {
    var data = defaultRetVal;
    try {
        if (!isEmpty(dataArr) && !isUndefined(paramsArr)) {
            data = dataArr;
            var len = paramsArr.length;
            for (var i = 0; i < len; ++i) {
                if (!isUndefined(paramsArr[i])) {
                    data = data[paramsArr[i]];
                }
            }
        }
        if (isUndefined(data)) {
            data = defaultRetVal;
        }
    }
    catch (e) {
        data = defaultRetVal;
    }
    return data;
}


function isEmpty(str) {
    if (isUndefined(str)) return true;

    if (!empty(str)) {
        str += '';
        if (str == 'undefined') return true;
        str.replace(/^\s+|\s+$/g, '');
        return (str == '' || str == 0);
    }
    return true;
}

function isUndefined(mixed_var) {
    if (typeof mixed_var == "undefined" || mixed_var === undefined || mixed_var === null) {
        return true;
    }
    mixed_var += '';
    if (mixed_var == 'undef' || mixed_var == 'undefined') return true;
    return false;
}

function isDefined(mixed_var) {
    return !isUndefined(mixed_var);
}


function _getTimezoneSpecificTimeObj() {
    var clientOffset = typeof _ClientSpecificTimezoneOffset != "undefined" ? _ClientSpecificTimezoneOffset : 0;
    var momentObj = moment.utc();
    return momentObj.add(clientOffset, 'seconds');
}

function getLocalTime(time, format) {

    var localTime = '';
    try {
        format = empty(format) ? 'DD-MMM-YYYY hh:mm A' : format;

        if (!empty(time)) {
            var momentObj = moment.utc(time);
        }
        else {
            var momentObj = _getTimezoneSpecificTimeObj();
        }

        if (momentObj.isValid()) {
            //localTime = momentObj.add(_ClientSpecificTimezoneOffset, 'seconds').format(format);
            // localTime = momentObj.tz(_clientsTimezoneStr).format(format);
            localTime = momentObj.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format(format);
        }
    } catch (e) {
        console.warn(e);
        localTime = '';
    }

    return localTime;
}

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getObjectData(obj, keysArr, defaultVal = null)
{
    return extractDataFromArray(obj, keysArr, defaultVal);
    /*
    var retVal = defaultVal;
    try
    {
        for (let i = 0; i < keysArr.length; ++i) 
        {
            let key = keysArr[i];
            if(typeof obj == 'object' && obj[key] != "undefined" && i < (keysArr.length-1))
            {
                obj = obj[key];
            }
            else if(i == (keysArr.length-1) && typeof obj == 'object' && obj[key] != "undefined")
            {
                retVal = obj[key];
                break;
            }
        }
    }
    catch(err)
    {console.log(err)}
    return retVal;
    */
}

function showAlertModal(heading, text)
{
    if(typeof heading == "undefined" || heading =="") heading = "Alert";
    if(typeof text == "undefined" || text =="") heading = "Some error has occurred. Please refresh the page and try again.";
    $(".modal").modal("hide");
    $("#alert_modal #alert_modal_heading").html(heading);
    $("#alert_modal #alert_modal_text").html(text);
    $("#alert_modal").modal("show");
}

function setCssVar($varName, $val, $selector=":root")
{
    try{
        document.querySelector($selector).style.setProperty('--'+$varName, $val);
    }catch(e){}
}