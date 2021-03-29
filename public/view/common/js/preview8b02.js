function createPreview(dynamic = false){
    function createQRPreviewTab(){
        var html = `<div class="gntr_qrcode_preview_wrapper">
       <!-- <div class="gntr_embed"><span class="icon-code"></span></div> -->
        <div class="gntr_qrcode_preview">
            <div class="gntr_qrcode_img">
                <img id="qrcode" src="/assets/images/qr-code.png">
            </div>
        </div>
        <div class="gntr_qrcode_setting">
            <ul class="nav mb-3 gntr_qrcode_setting_nav" id="gntr-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="gntr_sticker_tab" data-toggle="pill"
                        href="#gntr_sticker" role="tab" aria-controls="gntr_sticker"
                        aria-selected="true">sticker</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="gntr_color_tab" data-toggle="pill" href="#gntr_color"
                        role="tab" aria-controls="pills-profile" aria-selected="false">color</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="gntr_shape_tab" data-toggle="pill" href="#gntr_shape"
                        role="tab" aria-controls="pills-contact" aria-selected="false">Shapes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="gntr_logo_tab" data-toggle="pill" href="#gntr_logo"
                        role="tab" aria-controls="pills-contact" aria-selected="false">Logo</a>
                </li>
            </ul>
    
            <div class="tab-content gntr_tab_content">
                <!-- sticker -->
                <div class="tab-pane fade show active" id="gntr_sticker" role="tabpanel"
                    aria-labelledby="gntr_sticker_tab">
                    <ul class="gntr_sticker_list">
                        <li class="js_qr_sticker" data-index="0">
                            <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                            <img src="/assets/images/sticker/sticker-1.svg" />
                        </li>
                        <li class="js_qr_sticker" data-index="1">
                            <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                            <img src="/assets/images/sticker/sticker-2.svg" />
                        </li>
                        <li class="js_qr_sticker" data-index="2">
                            <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                            <img src="/assets/images/sticker/sticker-3.svg" />
                        </li>
                        <!-- <li><img src="images/sticker/sticker-4.svg" /></li> -->
                        <a href="#" class="gntr_sticker_list_more" data-toggle="modal"
                        data-target="#signup-free">
                            More <i class="icon-right_arrow font-10"></i>
                        </a>
                    </ul>
                </div>
                <!-- color -->
                <div class="tab-pane fade" id="gntr_color" role="tabpanel"
                    aria-labelledby="gntr_color_tab">
                    <ul class="gntr_color_list">
                        <li>
                            <div class="js_qr_color qr_color active">
                                <div class="qr_color_code" style="background: #000000"></div>
                            </div>
                        </li>
                        <li>
                            <div class="js_qr_color qr_color">
                                <div class="qr_color_code" style="background: #4d78fa"></div>
                            </div>
                        </li>
                        <li>
                            <div class="js_qr_color qr_color">
                                <div class="qr_color_code" style="background: #ff9000"></div>
                            </div>
                        </li>
                        <li>
                            <div class="js_qr_color qr_color">
                                <div class="qr_color_code" style="background: #e50041"></div>
                            </div>
                        </li>
                        <li>
                            <div class="js_qr_color qr_color js_qr_color_random">
                                <div class="qr_color_code"
                                    style="background-image: linear-gradient(red, yellow, lightblue, green);">
                                </div>
                            </div>
                        </li>
                        <a href="#" class="gntr_custom_link" data-toggle="modal"
                            data-target="#signup-free"> Custom Color <i
                                class="icon-right_arrow font-10"></i></a>
    
    
                    </ul>
                </div>
    
                <!-- shapes -->
                <div class="tab-pane fade" id="gntr_shape" role="tabpanel"
                    aria-labelledby="gntr_shape_tab">
                    <ul class="gntr_shape_list">
                        <li class="js_gntr_shape js_gntr_shape_default active"><img
                                src="/assets/images/qr-code-round.svg" /></li>
                        <li class="js_gntr_shape js_gntr_shape_circle"><img
                                src="/assets/images/qr-code-circle.svg" /></li>
                        <li class="js_gntr_shape js_gntr_shape_circle_2"><img
                                src="/assets/images/qr-code-circle-2.svg" /></li>
                        <a href="#" class="gntr_custom_link" data-toggle="modal"
                        data-target="#signup-free"> More QR shapes <i
                                class="icon-right_arrow font-10"></i></a>
                    </ul>
                </div>
    
                <!-- logo -->
                <div class="tab-pane fade" id="gntr_logo" role="tabpanel"
                    aria-labelledby="gntr_logo_tab">
                    <ul class="gntr_logo_list">
                        <li class="active gntr_logo_none js_qr_logo"><i class="icon-cross"></i></li>
                        <li class="gntr_logo_scanme_cor js_qr_logo" data-index="0"><i class="icon-scanme-cor"></i></li>
                        <li class="gntr_logo_scanme js_qr_logo" data-index="1"><i class="icon-scanme"></i></li>
                        <a href="#" class="gntr_custom_link" data-toggle="modal"
                        data-target="#signup-free"> Upload your own <i
                                class="icon-right_arrow font-10"></i></a>
                    </ul>
                </div>
            </div>
        </div>
        <div class="gntr_download p-4 pt-0">
            <a href="#" id="download"  class="btn btn-primary gntr_download_btn">DOWNLOAD <i
                    class="icon-down-arrow ml-2"></i>
                <span>JPG</span>
            </a>
            <a href="#" class="btn btn-outline-primary gntr_vector_btn ml-2" data-toggle="modal"
            data-target="#signup-free">Vector <i
                    class="icon-down-arrow ml-2"></i>
                <span>SVG/EPS/PNG</span>
            </a>
        </div>
    </div>`
    var doc = document.getElementById("preview_container")
    doc.innerHTML = html;
    }
    if(dynamic){

    }
    createQRPreviewTab()
}