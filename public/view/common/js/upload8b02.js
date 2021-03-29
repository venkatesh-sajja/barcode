var Upload = {
    ele: null,
    canCrop: false,
    cropper: null,
    aspectRatio: {
        'bg': 6 / 4,
        'pr': 1,
        'ld': 1,
    },
    init: function () {
        $(".image_uploader").on("change", function (e) {
            Upload.handleImageSelect(e)
        })
    },
    uploadImage: function (file, path, callback) {
        var pType = (typeof __PAGE_TYPE != 'undefined' && __PAGE_TYPE == 'i') ? 'i' : '';
        var data = new FormData();
        data.append("file", file);
        data.append("params", JSON.stringify([["l", 1024, 1024, 93, 0], ["m", 660, 660, 93, 0], ["t", 200, 200, 93, 0]]));//
        data.append("cmd", "uploadImage");
        data.append("dir", path + pType);
        $.ajax({
            data: data,
            type: "POST",
            url: "/user/services/api",
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.errorMsg == "RCP") {
                    $("#signup-free").modal("show")
                    __signup_callback = false;
                }
                else if (!empty(response.data)) {
                    callback(response.data[0]['l'])
                }
            }
        });
    },
    handleImageSelect: function (e) {
        if (e.target.files[0].type == "image/gif") {
            Upload.uploadImage(e.target.files[0], 'ga', function (url) {
                $(".list_uploaded_img").append('<li class="list-group-item">\
                <div class="uploaded_img_wrapper">\
                    <div class="uploaded_img" style="background-image:url(' + url + ');">\
                    </div>\
                    <div class="uploaded_caption">\
                        <input type="text" class="form-control uploaded_caption_text" placeholder="Title of your gallery page.">\
                    </div>\
                    <button type="button" class="btn btn-default uploaded_img_trash"><i class="icon-cross"></i></button>\
                    <button type="button" class="btn btn-default uploaded_img_move"><i class="icon-down-arrow"></i></button>\
                </div>\
            </li>')

                if (typeof galleryImages != "undefined") {
                    
                    $("#image_gallery").append(`<div class="img_gallery_wr">
                                                <a href="`+ url + `" data-toggle="lightbox" data-lightbox="roadtrip" data-title="" data-gallery="example-gallery"><img src="` + url + `" /></a>
                                            </div>`)
                    try{if(galleryImages) galleryImages.push({ "url": url, "title": "" })} catch(err){console.log(err)}
                }
                syncImgGalleryPreview()
                bgPicSelectEvent()
                hideLoader()
            })
            return
        }
        Upload.canCrop = true
        $("#image_cropper_modal").modal("show")
        var files = e.target.files
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById("crop_image").src = fr.result;
                $("#crop_image").on('load', function (e) {
                    if (!Upload.canCrop) {
                        return
                    }
                    Upload.canCrop = false
                    e.stopImmediatePropagation()
                    setTimeout(function () {

                        Upload.cropImage(e)
                    }, 1000)
                })

            }
            fr.readAsDataURL(files[0]);
        }
    },
    compress(blob, callback) {
        const width = 600;
        const fileName = 'blob';
        const type = blob.type
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const elem = document.createElement('canvas');
                const scaleFactor = width / img.width;
                elem.width = width;
                elem.height = img.height * scaleFactor;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
                ctx.canvas.toBlob((blob) => {
                    const file = new File([blob], fileName, {
                        type: type,
                        lastModified: Date.now()
                    });
                    callback(file)
                }, type, 1);
            },
                reader.onerror = error => console.log(error);
        };
    },
    cropImage: function (e) {
        var pType = (typeof __PAGE_TYPE != 'undefined' && __PAGE_TYPE == 'i') ? 'i' : '';
        var image = document.querySelector('#crop_image');
        if (Upload.cropper == null) {
            Upload.cropper = new Cropper(image, {
                aspectRatio: Upload.aspectRatio[Upload.type + pType],
                guides: false,
                highlight: false,
                dragCrop: false,
                movable: false,
                resizable: true,
                rotatable: false,
                cropBoxResizable: true,
                minCropBoxWidth: 60,
                minCropBoxHeight: 40,
                zoomable: false,
            });
        }
        else {
            Upload.cropper.replace(image.src)
        }
        $(".crop_image_btn").on("off")
        $(".crop_image_btn").on("click", function (e) {
            showLoaderOnBlock()
            if (_lastClickedEvent == e.originalEvent) {
                // _lastClickedEvent = null
                hideLoader()
                return
            }
            _lastClickedEvent = e.originalEvent
            Upload.cropper.getCroppedCanvas().toBlob((blob) => {
                Upload.compress(blob, function (file) {
                    Upload.uploadImage(file, Upload.type, function (url) {
                        $(Upload.ele).parents("ul").children("li").removeClass("active")
                        changePreviewImages(url)
                        if (Upload.type == 'ga') {
                            $(".list_uploaded_img").append('<li class="list-group-item">\
                            <div class="uploaded_img_wrapper">\
                                <div class="uploaded_img" style="background-image:url(' + url + ');">\
                                </div>\
                                <div class="uploaded_caption">\
                                    <input type="text" class="form-control uploaded_caption_text" placeholder="Title of your gallery page.">\
                                </div>\
                                <button type="button" class="btn btn-default uploaded_img_trash"><i class="icon-cross"></i></button>\
                                <button type="button" class="btn btn-default uploaded_img_move"><i class="icon-down-arrow"></i></button>\
                            </div>\
                        </li>')

                            if (typeof galleryImages != "undefined") {
                                
                                $("#image_gallery").append(`<div class="img_gallery_wr">
                                                            <a href="`+ url + `" data-toggle="lightbox" data-lightbox="roadtrip" data-title="" data-gallery="example-gallery"><img src="` + url + `" /></a>
                                                        </div>`)
                                try{if(galleryImages) galleryImages.push({ "url": url, "title": "" })} catch(err){console.log(err)}
                            }

                        } else {
                            $('<li class="uploaded_bg_image active">\
                                <div class="qr_bg_image_wr"  style="background-image:url(' + url + ');">\
                                </div>\
                            </li>').insertBefore($(Upload.ele).parents("ul").children('.image_uploader'))
                        }
                        syncImgGalleryPreview()
                        bgPicSelectEvent()
                        // Upload.cropper.reset()
                        Upload.cropper.destroy()
                        Upload.cropper = null
                        $("#crop_image").attr('src', "")
                        $("#image_cropper_modal").modal("hide")
                        hideLoader()
                    })
                })
            })


        })
    }
}

function syncImgGalleryPreview()
{
    if($("#image_gallery").length)
    {
        $("#image_gallery").html(''); 
        $(".uploaded_img_card .uploaded_img").each(function(idx, itm) {
                var url = $(itm).css("background-image").replace(/(url\(|\)|'|")/gi, '');
                $("#image_gallery").append(`<div class="img_gallery_wr">
                    <a href="`+ url + `" data-toggle="lightbox" data-lightbox="roadtrip" data-title="" data-gallery="example-gallery"><img style="border-radius:5px 5px 0 0;" src="` + url + `" /></a>
                </div>`);
            });
    }
}