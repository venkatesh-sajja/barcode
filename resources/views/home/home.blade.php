@extends('layout.layout')
@section('content')
    <section> 
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-8 p-0 pl-3">
                    <div class="card card-fconfig">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h1 class="gntr_form_title pageTitle mb-0">QR Code Generator for URL</h1>
                            <a id="step_by_step_guide_btn" class=" d-none" href="#" class="btn btn-link font-14"><i class="icon-guide font-18 mr-2" style="vertical-align: text-bottom;"></i> Step by step guide</a>
                        </div>
                        @include('sections.url-form')
                        <div class="card-footer">
                            <button class="btn btn-primary btn-lg gntr-qr-btn w-100 mt-2 mb-2 submit_qr_code" type="button">Save QR
                                Code<i class="icon-right_arrow font-16 easin ml-2"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">            
                    <div class="gntr_qrcode_preview_wrapper card">
                        <div class="card-body">
                            
                            <div class="gntr_qrcode_preview">
                                <div class="gntr_qrcode_img preview_qr_img">
                                    <img  id="qrcode_preview1" src="{{url('/default-qr-code/qr-code.png')}}">
                                </div>
                            </div>
                            <div class="gntr_qrcode_setting">
                                <ul class="nav mb-3 gntr_qrcode_setting_nav" id="gntr-tab" role="tablist1">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="gntr_sticker_tab" data-toggle="pill1" href="#gntr_sticker" role="tab" aria-controls="gntr_sticker" aria-selected="true">sticker</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onclick="showDesignPopUp('#gntr_color_tab-1'); return false;" class="nav-link" id="gntr_color_tab" data-toggle="pill1" href="#gntr_color" role="tab" aria-controls="pills-profile" aria-selected="false">color</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onclick="showDesignPopUp('#gntr_shape_tab-1'); return false;" class="nav-link" id="gntr_shape_tab" data-toggle="pill1" href="#gntr_shape" role="tab" aria-controls="pills-contact" aria-selected="false">Shapes</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onclick="showDesignPopUp('#gntr_logo_tab-1'); return false;" class="nav-link" id="gntr_logo_tab" data-toggle="pill1" href="#gntr_logo" role="tab" aria-controls="pills-contact" aria-selected="false">Logo</a>
                                    </li>
                                </ul>

                                <div class="tab-content gntr_tab_content">
                                    <!-- sticker -->
                                    <div class="tab-pane fade show active" id="gntr_sticker" role="tabpanel" aria-labelledby="gntr_sticker_tab">
                                        <ul class="gntr_sticker_list">
                                            <li class="js_qr_sticker" data-index="0">
                                                <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                                                <img loading="lazy" src="assets/images/sticker/sticker-1.svg" />
                                            </li>
                                            <li class="js_qr_sticker" data-index="1">
                                                <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                                                <img loading="lazy" src="assets/images/sticker/sticker-2.svg" />
                                            </li>
                                            <li class="js_qr_sticker" data-index="2">
                                                <div class="close_sticker js_close_stiker"><i class="icon-cross"></i></div>
                                                <img loading="lazy" src="assets/images/sticker/sticker-3.svg" />
                                            </li>
                                            <!-- <li><img loading="lazy"src="images/sticker/sticker-4.svg" /></li> -->
                                            <a href="#" class="gntr_sticker_list_more" data-target="#gntr_prebuilt_tab-1">
                                                <i class="icon-color-panel"></i> More Designs to Decorate QR <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i>
                                            </a>
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
                                                    <div class="qr_color_code" style="background-image: linear-gradient(red, yellow, lightblue, green);">
                                                    </div>
                                                </div>
                                            </li>
                                            <a href="#" class="gntr_custom_link new" data-target="#gntr_color_tab-1"> Select More Custom Colors <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a>


                                        </ul>
                                    </div>

                                    <!-- shapes -->
                                    <div class="tab-pane fade" id="gntr_shape" role="tabpanel" aria-labelledby="gntr_shape_tab">
                                        <ul class="gntr_shape_list">
                                            <li class="js_gntr_shape js_gntr_shape_default active"><img loading="lazy" src="assets/images/qr-code-round.svg" /></li>
                                            <li class="js_gntr_shape js_gntr_shape_circle"><img loading="lazy" src="assets/images/qr-code-circle.svg" /></li>
                                            <li class="js_gntr_shape js_gntr_shape_circle_2"><img loading="lazy" src="assets/images/qr-code-circle-2.svg" /></li>
                                            <a href="#" class="gntr_custom_link new" data-target="#gntr_shape_tab-1"> Select More QR Shapes <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a>
                                        </ul>
                                    </div>

                                    <!-- logo -->
                                    <div class="tab-pane fade" id="gntr_logo" role="tabpanel" aria-labelledby="gntr_logo_tab">
                                        <ul class="gntr_logo_list">
                                            <li class="active gntr_logo_none js_qr_logo"><i class="icon-cross"></i></li>
                                            <li class="gntr_logo_scanme_cor js_qr_logo" data-index="0"><i class="icon-scanme-cor"></i></li>
                                            <li class="gntr_logo_scanme js_qr_logo" data-index="1"><i class="icon-scanme"></i></li>
                                            <a href="#" class="gntr_custom_link new" data-target="#gntr_logo_tab-1"> Upload Your Own Logo <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i></a>
                                        </ul>
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
                                    </div -->
                                </div>
                            </div>
                            <div class="gntr_download p-4 pt-0">
                                <a href="#" id="download" class="btn btn-primary gntr_download_btn w-100">Download Large Size <i class="icon-down-arrow ml-2"></i>
                                    <!-- <span>JPG</span> -->
                                </a>
                                <a href="#" class="btn btn-outline-primary gntr_vector_btn ml-2 d-none" data-toggle="modal" data-target="#signup-free">Vector <i class="icon-down-arrow ml-2"></i>
                                    <span>SVG/EPS/PNG</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container  qr_cards mb-4">
            <div class="row">
                <div class="col-md-12 mb-4">
                    <h1 class="mb-2 pageTitle">Creative and Insightful Free Online QR Code Generator for All Businesses and Purposes</h1>
                    <p>QR Code Chimp (Monkey) allows businesses and individuals to design, edit, download, and track beautiful and appealing QR Codes online to fulfil different business goals cost-effectively. Use the QR Code Generator to make and create customize Dynamic and Static QR Codes to boost marketing efforts, track sales and conversions, and engage with consumers easily.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <div class="card"><a href="qr-code-on-business-card/index.html">
                            <img loading="lazy" src="images/qrusecase/businesscard.jpg" class="card-img-top" alt="QR Code for Business Card">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Business Card</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="qr-codes-on-bottles-and-cans/index.html">
                            <img loading="lazy" src="images/qrusecase/packaging.jpg" class="card-img-top" alt="QR Code for Product Packaging">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Packaging</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="qr-codes-for-marketing/index.html">
                            <img loading="lazy" src="images/qrusecase/brochures.jpg" class="card-img-top" alt="QR Code for Brochures">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Brochures</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="qr-codes-on-flyers/index.html">
                            <img loading="lazy" src="images/qrusecase/flyer.jpg" class="card-img-top" alt="QR Code for Flyer">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Flyer</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-3">
                    <div class="card"><a href="qr-codes-on-banners/index.html">
                            <img loading="lazy" src="images/qrusecase/banner.jpg" class="card-img-top" alt="QR Code for Banners">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Banners</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="how-to-use-qr-codes-on-clothing/index.html">
                            <img loading="lazy" src="images/qrusecase/clothing.jpg" class="card-img-top" alt="QR Code for Clothes">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Clothing</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="qr-codes-on-tickets/index.html">
                            <img loading="lazy" src="images/qrusecase/tickets.jpg" class="card-img-top" alt="QR Code for Tickets">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Tickets</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card"><a href="qr-code-for-book/index.html">
                            <img loading="lazy" src="images/qrusecase/book.jpg" class="card-img-top" alt="QR Code for Books">
                            <div class="card-body">
                                <p class="card-text">QR Codes For Books</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container  mb-4">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <div class="text-left">
                        <h1 class="main-header main-header--startpage mb-4">What are QR Codes?</h1>
                        <p>
                            QR Codes are machine-readable optical labels with encoded binary information, including but not limited to WhatsApp, URLs, websites, homepages, landing pages, social media sites, contact details, email texts, WiFi credentials, and even navigation and geo-locations.
                            They are similar to barcodes, but with modern capabilities. </p>
                        <p>
                            QR codes are readily read by modern iOS and Android native camera.
                            With a little bit of right marketing message and a few simple tricks, we have seen marketers increase the scan rates by 500%.
                            QR Code Chimp (Monkey) is a versatile online QR Code Generator that uses intuitive designs and AR-VR technology to produce high-definition codes.
                        </p>
                        <p>
                            Here’s how you can benefit from our free QR Code generator.
                            Different QR Codes types have different applications. However, you can achieve the following outcomes through QR Code Chimp (Monkey) online generator:
                        </p>
                    </div>
                </div>

                <div class="col-md-12 mt-5">
                    <div class="row">
                        <div class="explain-section col-xl-5 col-lg-5">
                            <span class="explain-section__number">1</span>
                            <h5 class="content-header--small">Call to action for customers</h5>
                            <p class="text__normal">Add a clear instructions for user, such as "Scan me" with a mobile icon next to it.</p>
                        </div>
                        <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                            <span class="explain-section__number">2</span>
                            <h5 class="content-header--small">Incentivise</h5>
                            <p class="text__normal">
                                People love incentives, such as discounts or loyalty rewards. For example, create a Digital Coupon using QR Code Generator and add a text like “Scan to get a 15% discount now!”.</p>
                        </div>
                        <div class="explain-section col-xl-5 col-lg-5 col-12">
                            <span class="explain-section__number">3</span>
                            <h5 class="content-header--small">Beautify Your QR Code</h5>
                            <p class="text__normal">Human brain automatically attracts towards beauty, symetry and balance.
                                Embedding your company logo, balancing the colors and shape of your QR Code elements will increase your scans significantly.
                                You may generate Round QR Codes, Circle, Heart or Hex shaped QR Codes with logo from our design tool.</p>
                        </div>
                        <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                            <span class="explain-section__number">4</span>
                            <h5 class="content-header--small">Embed it in your design</h5>
                            <p class="text__normal">Make sure the QR code merges with your marketing content and yet stands out with your call to action.
                                A size of 2cm x 2cm or above is good for almost all the cases and would be easy for people to scan.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
    <section>
        <div class="container mt-5 mb-4">
            <div class="row">

                <div class="col-md-6">
                    <img loading="lazy" class="img-fluid" src="images/dashboard.png" />
                </div>

                <div class="col-md-6 ">
                    <div class="text-left">
                        <h1 class="main-header main-header--startpage mb-4">Online tracking of your offline marketing</h1>
                        <p>
                            QR Code inevitably bridges the gap between online and offline marketing – right from your printed brochure to your company website.
                        </p>
                        <p>On QR Code Chimp’s Dynamic QR Codes, the scans are measurable - you can track total scans, with time and location.
                            You can easily do A/B testing by printing different QR Codes on different marketing media and measuring which one performs the best and on which demographics.
                        </p>
                        <p>You will receive a beautiful dashboard with detailed analytics.
                        </p>
                        <p>You can easily quantify the success of your physical world marketing campaign by measuring the conversion rates in terms of scans and actions performed by users on the displayed landing pages.
                        </p>
                        <p><a style="text-decoration:underline; color:var(--primary-color);cursor:pointer;" data-toggle="modal" data-target="#signup-free">Please signup</a> to use our Dynamic QR Code generator online for Free.</p>
                    </div>
                </div>



            </div>
        </div>
    </section>
    <section>
        <div class="container mt-5 mb-4">
            <div class="row">

                <div class="col-md-12 mt-5">

                    <div class="faq-startpage container">
                        <!-- start: FAQ - header -->
                        <h1 class="main-header main-header--startpage  mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p class="content-header content-header__subheader">
                            While QR Codes have been there for decades, usability and capabilities are still new to many. We have answered most of your questions about QR Code generators here:
                        </p>
                        <!-- end: FAQ - header -->

                        <!-- start: FAQ - content -->
                        <div class="faq-startpage__container container">
                            <div class="row">
                                <div class="explain-section col-xl-5 col-lg-5">
                                    <span class="explain-section__number">1</span>
                                    <h5 class="content-header--small">What is a QR code?</h5>
                                    <p class="text__normal">QR Code expands to Quick Response Code. These are machine-readable optical labels with, up to a few hundred characters, encoded information.
                                        Nowadays both Android and iOS phone's native camera is able to recognize and decode them.</p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                                    <span class="explain-section__number">2</span>
                                    <h5 class="content-header--small">What are some use cases of QR codes?</h5>
                                    <p class="text__normal">Nowadays QR Codes have become synonymous to mobile marketing,
                                        as these are heavely used by marketers to bring their target users to digital world from physical marketing materials such as flyers, business cards, billboards, magazine ads etc.
                                        <br />QR Codes are used to provide the digital marketing content, such as websites, images, videos, landing pages or contact details such as vcards, emails and phones.
                                        <br />These are also used to bring users to VR and AR experience, and collecting data for analytics.
                                        <br />Among morden brands these are also used in <a href="https://www.neurotags.com/supply-chain-visibility">Supply Chain Tracking</a> and in providing <a href="https://www.neurotags.com/anti-counterfeiting-solution">anti-counterfeiting</a> and authentication functionality to end users. Please visit <a href="https://www.neurotags.com/">NeuroTags.com</a> for more information.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5">
                                    <span class="explain-section__number">3</span>
                                    <h5 class="content-header--small">How to create and beautify QR code?</h5>
                                    <p class="text__normal">On QR Code Chimp you can create beautiful and stunning QR Codes within a few seconds.
                                        <br />1) Choose the type of content,
                                        <br />2) Sign up or login for Dynamic QR Code generator,
                                        <br />3) Enter the content data in provided input fields,
                                        <br />4) Beautify by clicking the color options, logo options, and shape options,
                                        <br />5) Enter the content data in provided input fields,
                                        <br />6) Download and print!
                                    </p>
                                    </p>
                                    <p>
                                        Optionally, you may upload your flyers, pamphlets or brochures large design files and get the QR code directly embed into them and download the resulting design for print.</p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                                    <span class="explain-section__number">4</span>
                                    <h5 class="content-header--small">How many customization options are available?</h5>
                                    <p class="text__normal">
                                        For a given QR Code area, you may customize the content, color, shapes, size, background image, logo image and container image.
                                        QR code can be static or dynamic. For dynamic code, you get lot many extra options such as v-plus-cards, landing pages, forms, videos and many more.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5" id="faq-dynamiccode">
                                    <span class="explain-section__number">5</span>
                                    <h5 class="content-header--small">What are static and dynamic QR codes?</h5>
                                    <p class="text__normal">
                                        Static QR Codes encode the final data which is displayed after a scan, for instance, a wedding invitation card.
                                    </p>
                                    <p>However, Dynamic QR Codes embed the URL to data, so that after scanning the URL opens in the browser and
                                        user is then shown the actual data.
                                    </p>
                                    <p>Dynamic QR codes are very powerful; their content can be changed at any time, umpteen number of times without
                                        having to change the actual QR Code. This reduces the time, cost, and effort to re-print new QR Codes. You may
                                        virtually add infinite amount of data against the QR Code and in any format, e.g., audio, video, images, AR, VR, and landing pages.
                                    </p>
                                    <p>
                                        On Dynamic QR Codes, all the scans can be monitored and tracked, giving you a rich set of analytics to measure and
                                        improve the performance of your campaign(s). Create Dynamic Codes through our QR Code generator online.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                                    <span class="explain-section__number">6</span>
                                    <h5 class="content-header--small">Can I measure the number of scans of my QR codes?</h5>
                                    <p class="text__normal">Scans can be monitored and tracked for any Dynamic QR code. Once you create a dynamic code you can see the rich analytics corresponding to it on your dashboard page (you would be required to signin to access that page).</p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5" id="faq-fileformats">
                                    <span class="explain-section__number">7</span>
                                    <h5 class="content-header--small">What are recommended sizes and practices for printing?</h5>
                                    <p class="text__normal">
                                        Make sure to have the QR Code size of least 2cm x 2cm, when focused from camera.
                                        High resolution PNG images are preferred.
                                        It is always good to first do some test prints and scan the QR codes and see how they perform.
                                        Once satisfied you may go out for professional printing.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2" id="faq-print">
                                    <span class="explain-section__number">8</span>
                                    <h5 class="content-header--small">Can I directly embed QR Codes on the high resolution designs?</h5>
                                    <p class="text__normal">
                                        Yes, we provide option for you to upload your design images (flyers, brochures, billboard, magazine ads etc.) and the tools to select area on the image
                                        where you would like to embed the QR code, and then based on your color, shape and logo preferences a new image with embeded QR code is created and is made available for you to download.
                                        <br />Our tools are optimized to provide you the resulting image really fast and of the same quality as original.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5" id="faq-scan">
                                    <span class="explain-section__number">9</span>
                                    <h5 class="content-header--small">How can I scan a QR Code?</h5>
                                    <p class="text__normal">
                                        In modern smartphones, both Android and iOS, the inbuild camera app has capability to scan the QR code. However, you may also download any scanner app from your app store to scan the codes.
                                        We also provide a scanner web-app url (which doesn't require any app download), just open this url
                                        <!--(<a href="https://www.qrcodechimp.com/qr-code-scanner">https://www.qrcodechimp.com/qr-code-scanner</a>) -->in your mobile browser and allow camera access and start scanning.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2" id="faq-successful">
                                    <span class="explain-section__number">10</span>
                                    <h5 class="content-header--small">How can QR code be used for Marketing purpose?</h5>
                                    <p class="text__normal">
                                        Think about the situations where a user will appreciate you for easily bringing him to the digital world.
                                        <br />Some of the examples are, showing multimedia content such as videos, audio, rich information about the products or places or your offerings.
                                        <br />Filling up the form and get an instant confirmation of submission.
                                        <br />AR and VR for fun and to provide more product components information and the feel of interaction.
                                        <br />To provide discounts and coupons.
                                        <br />For loyalty rewards. You may like to visit NeuroTags' <a href="https://www.neurotags.com/customer-loyalty-program-software">Loyalty Program Software</a> for very intuitive and effective loyalty program implementation.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5">
                                    <span class="explain-section__number">11</span>
                                    <h5 class="content-header--small">What else can be done with QR Codes?</h5>
                                    <p class="text__normal">
                                        The possibilities are infinite.
                                        Think of any situation where you would like your users to be brought into digital world from physical.
                                        You can effectively design you QR code with marketing message using our tools. If you have any specific custom request in mind please feel free to contact us.
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                                    <span class="explain-section__number">12</span>
                                    <h5 class="content-header--small">Where can I get more technical information on QR Codes?</h5>
                                    <p class="text__normal">
                                        You may like to visit the wikipedia page about QR Code Creater <a href="https://en.wikipedia.org/wiki/QR_code">https://en.wikipedia.org/wiki/QR_code</a>
                                    </p>
                                </div>
                                <div class="explain-section col-xl-5 col-lg-5 offset-lg-2">
                                    <span class="explain-section__number">13</span>
                                    <h5 class="content-header--small">Why QR Code chimp and not QR Code monkey?</h5>
                                    <p class="text__normal">
                                        We feel chimp is way more evolved and intelligent than monkey!</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

