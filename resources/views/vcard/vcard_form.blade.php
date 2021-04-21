@extends('layout.layout')
@section('content')
    <section>
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-8 p-0 pl-3">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h1 class="gntr_form_title pageTitle mb-0">QR Code Generator for Vcard</h1> <a id="step_by_step_guide_btn" class=" d-none" href="#" class="btn btn-link font-14"><i class="icon-guide font-18 mr-2" style="vertical-align: text-bottom;"></i> Step by step guide</a> </div>
                                <div class="card-body">
                                    <form class="page_form">
                                        <input type="hidden" name="id" value="new">
                                        <input type="hidden" name="qr_type" value="S">
                                        <input type="hidden" name="short_url" value=4gvqweQK>
                                        <input type="hidden" name="page" value="vcard">
                                        <input type="hidden" name="template_name" value="">
                                        <!-- <div class="form-group">
                                        <input type="text" class="form-control text-webpage" name="template_name" value="" autofocus id="qr_code_name" placeholder="Type your QR code name.">
                                    </div> -->
                                        <div class="card collapse_card mb-3">
                                            <div class="card-header card_top_header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h5 class="mb-0">
                                            <a class="btn btn-link collapsed">
                                                Basic Information
                                            </a>
                                        </h5> </div>
                                            <div id="collapseTwo" class="collapse show secondary_color vcard_data" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-3">Name</div>
                                                        <div class="col-md-9">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="first_name" value="" placeholder="First name"> </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="last_name" value="" placeholder="Last name"> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Numbers</div>
                                                        <div class="col-md-9">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="phone_number" value="" placeholder="Number"> </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="tel_number" value="" placeholder="Telephone number"> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Email</div>
                                                        <div class="col-md-9">
                                                            <div class="form-group">
                                                                <input type="email" class="form-control" name="email" value="" placeholder="Your email id"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Company</div>
                                                        <div class="col-md-9">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="company" value="" placeholder="Your company name"> </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" name="designation" value="" placeholder="Your job"> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Street</div>
                                                        <div class="col-md-9">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="street" value="" placeholder="Street"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">City</div>
                                                        <div class="col-md-5">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="city" value="" placeholder="City"> </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="zipcode" value="" placeholder="Zipcode"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">State</div>
                                                        <div class="col-md-9">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="state" value="" placeholder="State"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Country</div>
                                                        <div class="col-md-9">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="country" value="" placeholder="Country"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">Website</div>
                                                        <div class="col-md-9">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="website" value="" placeholder="www.websitename.com"> </div>
                                                        </div>
                                                    </div>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="dynamic">
                                                        <label class="custom-control-label" for="dynamic">Make dynamic (for tracking & analytics)</label>
                                                    </div>
                                                    <input type="hidden" name="dynamic" value=>
                                                    <button type="button" class="btn btn-link btn-lg font-12 gntr-qr-btn float-right" type="submit">Refresh QR Code<i class="icon-refresh ml-2"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card collapse_card">
                                            <div class="card-header card_top_header collapsed open_design_code_popup" id="headingTwo" data-toggle="modal" data-target="#gntr_prebuilt_tab" aria-expanded="false" aria-controls="collapseThree">
                                                <h5 class="mb-0">
                                                <a class="btn btn-link collapsed">
                                                    Design, Color and Decorate QR Code
                                                </a>
                                            </h5> </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary btn-lg gntr-qr-btn w-100 mt-2 mb-2 submit_qr_code" type="button">Save QR Code <i class="icon-right_arrow font-16 easin ml-2"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gntr_qrcode_preview_wrapper card">
                                <div class="card-body">
                                    <!-- <div class="gntr_embed"><span class="icon-code"></span></div> -->
                                    <div class="gntr_qrcode_preview">
                                        <div class="gntr_qrcode_img preview_qr_img"> <img loading="lazy" id="qrcode_preview" src="assets/images/qr-code.png"> </div>
                                    </div>
                                    <div class="gntr_qrcode_setting">
                                        <ul class="nav mb-3 gntr_qrcode_setting_nav" id="gntr-tab" role="tablist1">
                                            <li class="nav-item"> <a class="nav-link active" id="gntr_sticker_tab" data-toggle="pill1" href="#gntr_sticker" role="tab" aria-controls="gntr_sticker" aria-selected="true">sticker</a> </li>
                                            <li class="nav-item"> <a onclick="showDesignPopUp('#gntr_color_tab-1'); return false;" class="nav-link" id="gntr_color_tab" data-toggle="pill1" href="#gntr_color" role="tab" aria-controls="pills-profile" aria-selected="false">color</a> </li>
                                            <li class="nav-item"> <a onclick="showDesignPopUp('#gntr_shape_tab-1'); return false;" class="nav-link" id="gntr_shape_tab" data-toggle="pill1" href="#gntr_shape" role="tab" aria-controls="pills-contact" aria-selected="false">Shapes</a> </li>
                                            <li class="nav-item"> <a onclick="showDesignPopUp('#gntr_logo_tab-1'); return false;" class="nav-link" id="gntr_logo_tab" data-toggle="pill1" href="#gntr_logo" role="tab" aria-controls="pills-contact" aria-selected="false">Logo</a> </li>
                                        </ul>
                                        <div class="tab-content gntr_tab_content">
                                            <!-- sticker -->
                                            <div class="tab-pane fade show active" id="gntr_sticker" role="tabpanel" aria-labelledby="gntr_sticker_tab">
                                                <ul class="gntr_sticker_list">
                                                    <li class="js_qr_sticker" data-index="0">
                                                        <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div> <img loading="lazy" src="assets/images/sticker/sticker-1.svg" /> </li>
                                                    <li class="js_qr_sticker" data-index="1">
                                                        <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div> <img loading="lazy" src="assets/images/sticker/sticker-2.svg" /> </li>
                                                    <li class="js_qr_sticker" data-index="2">
                                                        <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div> <img loading="lazy" src="assets/images/sticker/sticker-3.svg" /> </li>
                                                    <!-- <li><img loading="lazy"src="images/sticker/sticker-4.svg" /></li> -->
                                                    <a href="#" class="gntr_sticker_list_more" data-target="#gntr_prebuilt_tab-1"> <i class="icon-color-panel"></i> More Designs to Decorate QR <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i> </a>
                                                </ul>
                                            </div>
                                            <!-- color -->
                                            <div class="tab-pane fade" id="gntr_color" role="tabpanel" aria-labelledby="gntr_color_tab">
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
                                                            <div class="qr_color_code" style="background-image: linear-gradient(red, yellow, lightblue, green);"> </div>
                                                        </div>
                                                    </li> <a href="#" class="gntr_custom_link new" data-target="#gntr_color_tab-1"> Select More Custom Colors <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a> </ul>
                                            </div>
                                            <!-- shapes -->
                                            <div class="tab-pane fade" id="gntr_shape" role="tabpanel" aria-labelledby="gntr_shape_tab">
                                                <ul class="gntr_shape_list">
                                                    <li class="js_gntr_shape js_gntr_shape_default active"><img loading="lazy" src="assets/images/qr-code-round.svg" /></li>
                                                    <li class="js_gntr_shape js_gntr_shape_circle"><img loading="lazy" src="assets/images/qr-code-circle.svg" /></li>
                                                    <li class="js_gntr_shape js_gntr_shape_circle_2"><img loading="lazy" src="assets/images/qr-code-circle-2.svg" /></li> <a href="#" class="gntr_custom_link new" data-target="#gntr_shape_tab-1"> Select More QR Shapes <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a> </ul>
                                            </div>
                                            <!-- logo -->
                                            <div class="tab-pane fade" id="gntr_logo" role="tabpanel" aria-labelledby="gntr_logo_tab">
                                                <ul class="gntr_logo_list">
                                                    <li class="active gntr_logo_none js_qr_logo"><i class="icon-cross"></i></li>
                                                    <li class="gntr_logo_scanme_cor js_qr_logo" data-index="0"><i class="icon-scanme-cor"></i></li>
                                                    <li class="gntr_logo_scanme js_qr_logo" data-index="1"><i class="icon-scanme"></i></li> <a href="#" class="gntr_custom_link new" data-target="#gntr_logo_tab-1"> Upload Your Own Logo <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a> </ul>
                                            </div>
                                            <!-- shapes -->
                                            <!-- div class="tab-pane fade" id="gntr_bgimg" role="tabpanel"
                            aria-labelledby="gntr_bgimg_1-1">
                            <div class="subheading">Add QR Code to Your Own Picture</div>
                            <div class="dflex items">
                                <div id="imageDiv" style="max-height:600px;max-width:600px;position:relative; display: inline-block; ">
                                    <img loading="lazy"id="qrcode2Img" style="margin-top: 0; max-height:600px;max-width:600px;" class="responsive-img" src="">
                                    <div id="resize-drag" class="ui-widget-content"></div>
                                </div>   
                            </div>
                        </div --></div>
                                    </div>
                                    <div class="gntr_download p-4 pt-0"> <a href="#" id="download" class="btn btn-primary gntr_download_btn w-100">Download Large Size <i class="icon-down-arrow ml-2"></i>
                        <!-- <span>JPG</span> -->
                    </a> <a href="#" class="btn btn-outline-primary gntr_vector_btn ml-2 d-none" data-toggle="modal" data-target="#signup-free">Vector <i class="icon-down-arrow ml-2"></i>
                        <span>SVG/EPS/PNG</span>
                    </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container mt-5">
                    <div class="">
                        <div class="">
                            <style>
                            .pg_header_box {
                                padding: 60px 60px 0 60px;
                                margin-bottom: 50px;
                                background-color: transparent;
                                background-image: url(assets/images/qrbusinesspage/bg_page_header.svg);
                                background-size: 100%;
                                min-height: 558px;
                                background-repeat: no-repeat;
                            }
                            
                            .play_video {
                                border: solid 2px var(--primary-color);
                                display: inline-block;
                                border-radius: 8px;
                                padding: 10px 20px;
                                font-size: 18px;
                                line-height: 24px;
                            }
                            
                            .play_video i {
                                display: block;
                                height: 42px;
                                float: left;
                                font-size: 40px;
                                margin: 5px 12px 0 0;
                            }
                            
                            .qrcode_header_img {
                                margin-bottom: -100px;
                            }
                            
                            @media (max-width: 767px) {
                                .generator_form {
                                    min-height: auto;
                                }
                                .gntr-qr-btn {
                                    width: 100%;
                                }
                                .gntr_download {
                                    background: #fff;
                                    position: fixed;
                                    bottom: 0;
                                    width: 100%;
                                    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                                    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                                }
                                .gntr_tab_content {
                                    margin: 0 0 80px 0;
                                }
                            }
                            </style>
                            <section>
                                <div class="container mt-4 mb-4">
                                    <div class="row">
                                        <div class="col-md-12 p-0">
                                            <div class="card border-0 pg_header_box">
                                                <div class="card-body">
                                                    <h1><strong>QR Code For vCard</strong>&nbsp;</h1>
                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <h3 class="mb-2 mt-5"><span style="font-weight: 400;">Get connected instantly by sharing your contact details on a single scan.</span></h3> </div>
                                                        <div class="col-md-7 text-center">
                                                            <div class="qrcode_header_img"><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_save_contact.png" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="mb-2 mt-5 text-center">More about vCard QR code<br /><br /></h3>
                                    <div class="row my-5">
                                        <div class="col-md-6">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_business_card.png" />
                                                <br />
                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <h5><strong><br /><br /><br />Get connected quickly<br /><br /></strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Frequently, there is a need to share contact<br />details </span><span style="font-size: 1rem; text-align: left;">with customers or with a peer network<br />in a convenient way. vC</span><span style="font-weight: 400;">ard QR provides you<br />with quick sharing that directly adds your<br />contact details in the scanners' contact list. <br />No need to type for saving contact anymore! </span></p>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-2">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/share-qr-url.png" /></div>
                                        </div>
                                        <div class="col-md-8">
                                            <h5><strong><br />Share contact details</strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Input all your contact details in a single place to generate vCard QR code. Use this as a digital card to share your contact details with clients, at events or with potential buyers. </span></p>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-2">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/custom-qr-codes.png" /></div>
                                        </div>
                                        <div class="col-md-8">
                                            <h5><strong><br />Design QR code</strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Want an attractive QR code? Customise your QR to get noticed by the viewers and tend your customers to scan your QR code. </span></p>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-2">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_print.png" /></div>
                                        </div>
                                        <div class="col-md-8">
                                            <h5><strong><br />Ready to print QR images</strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Once QR code is generated, you can hit download. We offer high-quality images to download, can be used directly to print for advertisement. They work well with posters having a large QR code size. </span></p>
                                        </div>
                                    </div>
                                    <h3 class="mb-0 mt-5 text-center"><br />Create a vCard QR code in less than a minute!</h3>
                                    <div class="row my-5">
                                        <div class="col-md-4">
                                            <h5><strong><br /><br /><br /><br />Step 1: Choose your QR code type<br /><br /></strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">You will get to see different types of QR codes. Amongst them, select the vCard QR code. </span><span style="font-weight: 400;">&nbsp;</span></p>
                                        </div>
                                        <div class="col-md-8 mt-5 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_select.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-4">
                                            <h5><strong><br /><br /><br /><br />Step 2: Enter the Data<br /><br /></strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Type the contact details such as name, number, etc. in the given fields which will be displayed to viewers on scanning a QR code.</span><span style="font-weight: 400;">&nbsp;</span></p>
                                        </div>
                                        <div class="col-md-8 mt-5 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_fill_information.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-4">
                                            <h5><strong><br /><br /><br /><br />Step 3: Design QR code<br /><br /></strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Customise QR code with your favorite colors or according to a theme. Make it look attractive with the frames with a call to action texts. You can make use of your brand logo or other logos to make QR even more attractive.</span><span style="font-weight: 400;">&nbsp;</span></p>
                                        </div>
                                        <div class="col-md-8 mt-5 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_customise.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-4">
                                            <h5><strong><br /><br /><br /><br />Step 4: Save, Download &amp; Manage<br /><br /></strong></h5>
                                            <p style="text-align: justify;"><span style="font-weight: 400;">Save the QR code by giving a unique name. Your QR will get saved in a dashboard where you can pause, delete or make QR active as per your need. Download it and start sharing! </span><span style="font-weight: 400;">&nbsp;</span></p>
                                        </div>
                                        <div class="col-md-8 mt-5 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_dashboard.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-12 mb-5 text-center">
                                            <h3 class="mb-0 mt-5">vCard QR code gallery</h3> </div>
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr_business_card.png" /></div>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_on_flyer.png" /></div>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr_on_business_card.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-6 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_fashion_flyer.png" /></div>
                                        </div>
                                        <div class="col-md-6 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr_business_flyer.png" /></div>
                                        </div>
                                    </div>
                                    <div class="row my-5">
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_on_business_card.png" /></div>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr-code_photographer_business_card.png" /></div>
                                        </div>
                                        <div class="col-md-4 text-center">
                                            <div class=""><img class="img-fluid" src="images/qrcodechimp/sysconf/vcard-qr_visiting_card.png" /></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-5 text-center"><a class="btn btn-lg mr-3 btn-primary" href="qr-code-generator-for-vcard.html">Create Your Own</a></div>
                                    <div class="row my-5">
                                        <div class="col-md-12 mt-5 mb-5 d-flex justify-content-between">
                                            <h3 class="mb-0 ">Create custom QR code for</h3> <a class="btn btn-outline-primary" href="user/createTemplate.html">Show all</a></div>
                                        <div class="col-md-3 text-center">
                                            <div class="card border-0">
                                                <div class="card-body p-0">
                                                    <a href="qr-code-generator-for-vcardWeb.html"><img class="img-fluid" src="images/qrbusinesspage/create_qr_1.jpg" /></a>
                                                    <p class="p-3 mb-0">Vcard Plus</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-center">
                                            <div class="card border-0">
                                                <div class="card-body p-0">
                                                    <a href="qr-code-generator-for-image.html"><img class="img-fluid" src="images/qrbusinesspage/create_qr_2.jpg" /></a>
                                                    <p class="p-3 mb-0">Image Gallery</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-center">
                                            <div class="card border-0">
                                                <div class="card-body p-0">
                                                    <a href="qr-code-generator-for-socialMedia.html"><img class="img-fluid" src="images/qrbusinesspage/create_qr_3.jpg" /></a>
                                                    <p class="p-3 mb-0">Social Media</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-center">
                                            <div class="card border-0">
                                                <div class="card-body p-0">
                                                    <a href="qr-code-generator-for-event.html"><img class="img-fluid" src="images/qrbusinesspage/create_qr_4.jpg" /></a>
                                                    <p class="p-3 mb-0">Event</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /container -->
                            </section>
                            <div class="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" tabindex="-1">
                                <div class="modal-dialog qr-modal-dialog modal-dialog-centered modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body qr-modal-body">
                                            <button type="button" class="close qr-close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                                            <!-- 16:9 aspect ratio -->
                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe class="embed-responsive-item" src="#" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script>
                            window.addEventListener("load", function(event) {
                                // Gets the video src from the data-src on each button
                                var $videoSrc;
                                $('.video-btn').click(function() {
                                    $videoSrc = $(this).data("src");
                                });
                                console.log($videoSrc);
                                // when the modal is opened autoplay it  
                                $('#myModal').on('shown.bs.modal', function(e) {
                                        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                                        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
                                    })
                                    // stop playing the youtube video when I close the modal
                                $('#myModal').on('hide.bs.modal', function(e) {
                                        // a poor man's stop video
                                        $("#video").attr('src', $videoSrc);
                                    })
                                    // document ready  
                            });
                            </script>
                        </div>
                    </div>
                </div>
            </section>
<script >
    var get_url_qrcode = "{{route('get_url_qrcode')}}";
    var save_campaign = "{{route('save_campaign')}}";
    var image_url = "{{url('/qr-code/')}}/";
    var qr_type = 'VCard';
</script>
<script src="{{asset('/js/custom/generate-vcard-code.js')}}"></script>
@endsection

