<!DOCTYPE html>
<html lang="en-US">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by HTTrack -->

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <meta property="og:title" content="QR Code Generator | Create Your Free QR Codes Online with Logo" />
    <meta property="og:image" content="assets/images/qr-code-generator.jpg" />
    <title>QR Code Generator | Create Your Free QR Codes Online with Logo</title>
    <meta name="keywords" content="QR Code Generator, Free QR Code Generator, Free QR Code Generator Online, QR Code Generator with Logo" />
    <meta name="description" content="QR Code Generator for URL, vCard, Facebook, Instagram, YouTube and more. Make round, logo, colors, stickers, and download in high print quality. Get your free QR Codes online now!" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
    </noscript>
    <link rel="preload" href="assets/css/font8b02.css?v=1615296389" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript>
        <link rel="stylesheet" href="assets/css/font8b02.css?v=1615296389">
    </noscript>
    <link rel="preload" href="assets/css/maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript>
        <link rel="stylesheet" href="../maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    </noscript>
    <link rel="preload" href="view/common/css/preview8b02.css?v=1615296389" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript>
        <link rel="stylesheet" href="view/common/css/preview8b02.css?v=1615296389">
    </noscript>
    <link href='view/url/style8b02.css?v=1615296389' type='text/css' rel='stylesheet' />
    <link href='css/custom.css' type='text/css' rel='stylesheet' />
    <script type='text/javascript' src='assets/js/lightbox-plus-jquery8b02.js?v=1615296389'></script>
    <script type='text/javascript' src='assets/js/jquery-slim.min8b02.js?v=1615296389'></script>
    <script type='text/javascript' src='assets/js/jquery-ui.min8b02.js?v=1615296389'></script>
</head>

<body onunload="" class="loading " id="page-top">
    <div class="show_loader" style="display:none">
        <div class="spinner-grow text-muted"></div>
    </div>
    <div class="wrapper">
        <nav id="sidebar" class="active">
            <div class="fixnav left_nav_hide">
                <div class="sidebar-header"> <img loading="lazy" src="assets/images/qr-code-chimp-white.svg"> </div>
                <ul class="list-unstyled components">
                    <li> <a href="index.html">Home</a> </li>
                    <li> <a href="pricing.html">Purchase Plan</a> </li>
                    <!-- <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">My QR Codes</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Active</a>
                    </li>
                    <li>
                        <a href="#">Paused</a>
                    </li>
                </ul>
            </li> -->
                    <li> <a href="user/404.html">My QR Codes</a> </li>
                    <li> <a href="user/404.html?status=A" class="active_count">Active (0)</a> </li>
                    <li> <a href="user/404.html?status=P" class="pause_count">Paused (0)</a> </li>
                </ul>
                </ul>
            </div>
        </nav>
        <div id="content">
            @include('layout.main-header') 
                @include('layout.sub-header')
                <section> @yield('content') </section>
                <section class="footer"> @yield('layout.footer') </section>
        </div>
    </div>
    <script>
    const _user_logos = [];
    </script>
    @include('layout.design-qrcode-modal')
    <!-- Free Sign Up -->
    <div class="modal fade" id="image_cropper_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-block text-center w-100" id="exampleModalLabel">Crop Image</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body p-2">
                    <div class="crop_image_preview"> <img loading="lazy" id="crop_image" src="#" alt="Picture"> </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-outline-secondary" class="close" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary crop_image_btn">Crop</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Free Sign Up -->
    <div class="modal fade" id="forgot_password_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-block text-center w-100" id="exampleModalLabel">FORGOT PASSWORD</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body p-0">
                    <div class="row d-flex">
                        <div class="col-md-12">
                            <form class="forgot_password_form p-4 pl-0">
                                <input type="hidden" name="cmd" value="forgotPassword">
                                <div class="form-group">
                                    <label class="form-label">Enter your registered email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Email ID"> </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary w-100 mt-4 btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Free Sign Up -->
    <div class="modal fade" id="signup-free" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-block text-center w-100" style="font-weight:bold;" id="exampleModalLabel">Please Signup to Continue, It's Completely Free!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body p-0">
                    <div class="row d-flex">
                        <div class="col-md-6"> <img loading="lazy" src="assets/images/signup_popup_image.jpg" class="img-fluid"> </div>
                        <div class="col-md-6">
                            <form class="signup_form p-4 pl-0" method="POST" action="{{ route('custom_login') }}"> @csrf
                                <input type="hidden" name="cmd" value="signInUser">
                                <label class="radio mr-4 mb-3">
                                    <input type="radio" name="login_type" value="signup" checked> I'm a new user </label>
                                <label class="radio mb-3">
                                    <input type="radio" name="login_type" value="login"> I'm an existing user </label>
                                <label class="form-group has-float-label signup_block">
                                    <input class="form-control" type="text" name="name" placeholder="Name" /> <span>Name*</span> </label>
                                <label class="form-group has-float-label">
                                    <input class="form-control" type="email" name="email" placeholder="Email ID" required/> <span>Email ID*</span> </label>
                                <label class="form-group has-float-label">
                                    <input class="form-control" type="password" name="password" placeholder="Password" required/> <span>Password*</span> </label>
                                <label class="form-group has-float-label signup_block">
                                    <input class="form-control" type="password" name="verify_pass" placeholder="Confirm password" /> <span>Confirm password*</span> </label>
                                <div class="form-group"> <span id="signInErrorMsg"></span> <span id="signInSuccessMsg"></span>
                                    <button type="submit" class="btn btn-primary w-100 mt-4 btn-lg">Done</button>
                                </div>
                                <!-- <div class="form-group " >
                                    <a href="#" class="font-12" id="forgot_password" style="display:none;"> Forgot Password?</a>
                                </div> -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Free Sign Up -->
    <div class="modal fade" id="template_name_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-block text-center w-100" id="exampleModalLabel">Campaign Name</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body p-5">
                    <div class="form-group row">
                        <label for="page_title" class="col-sm-12 col-form-label">Give a name to your QR code campaign</label>
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="campaign_name_qr" placeholder=""> <span class="text-danger d-none campaign_name_qr_alert">*Field required</span> </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary " data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary save_qr_campaign">Save</button>
                </div>
            </div>
        </div>
    </div>
    <script>
    var page = "url";
    var __KEYUP_DELAY = 1500;
    </script>
    <!-- Alert Modal -->
    <div class="modal fade" id="alert_modal" tabindex="-1" role="dialog" aria-labelledby="alert_modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-block text-center w-100" id="alert_modal_heading">Alert!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body p-0">
                    <div class="row">
                        <div class="col-md-12 justify-content-center">
                            <div style="padding:20px 40px; min-height:80px; color:red; text-align:left;" id="alert_modal_text"> </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" style="width:96px;">Ok</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script type="text/javascript">
var base_url = "{{url('/')}}";
</script>
<script type='text/javascript' src='assets/js/blockui.min8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/popper.min8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/www.gstatic.com/firebasejs/7.14.2/firebase-app.js'></script>
<script type='text/javascript' src='assets/js/www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js'></script>
<script type='text/javascript' src='assets/js/maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'></script>
<script type='text/javascript' src='assets/js/moment/moment.min8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/moment/moment-timezone.min8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/bootstrap-datetimepicker8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/tinymcev5.0.15/tinymce.min8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/require8b02.js?v=1615296389'></script>
<script type='text/javascript' src='assets/js/loader8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/app8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/login8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/common8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/modal8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/preview8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/url/formSubmit8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/qrCodeFunctions8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/updatePreview8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/plugins/spectrum8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/plugins/cropper8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/upload8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/colorPicker8b02.js?v=1615296389'></script>
<script type='text/javascript' src='view/common/js/qrGenerator8b02.js?v=1615296389'></script>
<script>
$(document).ready(function() {
   
    $('input[type=radio][name=bedStatus]').change(function() {
        if(this.value == 'allot') {
            alert("Allot Thai Gayo Bhai");
        } else if(this.value == 'transfer') {
            alert("Transfer Thai Gayo");
        }
    });
});
</script>
</html>