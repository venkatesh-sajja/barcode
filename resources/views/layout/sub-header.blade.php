@php
    $current_route = Request::route()->getName()
@endphp
<style>
.gntr_logo_scanme img {
    width: 100%;
}
</style>
<section>
    <div class="container gntr_nav_wrapper mt-4 mb-4">
        <div class="row">
            <div class="col-md-12">
                <ul class="generator_nav"><li>
                            <a href="home" @if($current_route == 'home') class="active" @endif >

                                <div class="nav_icon_img"><i class="icon-webpage_2"></i></div>URL
                            </a>
                        </li><li>
                            <a href="qr_code_for_text" @if($current_route == 'qr_code_for_text') class="active" @endif >
                                <div class="nav_icon_img"><i class="icon-text_1"></i></div>Text
                            </a>
                        </li><li>
                            <a href="qr-code-generator-for-email.html" class="" >
                                <div class="nav_icon_img"><i class="icon-email_1"></i></div>Email
                            </a>
                        </li><li>
                            <a href="qr-code-generator-for-youtube.html" class="" >
                                <div class="nav_icon_img"><i class="icon-youtube"></i></div>Youtube
                            </a>
                        </li><li>
                            <a href="vdcard" @if($current_route == 'vdcard') class="active" @endif >
                                <div class="nav_icon_img"><i class="icon-vcard_2"></i></div>Vcard
                            </a>
                        </li><li>
                            <a href="qr-code-generator-for-facebook.html" class="" >
                                <div class="nav_icon_img"><i class="icon-facebook"></i></div>Facebook
                            </a>
                        </li><li>
                            <a href="qr-code-generator-for-event.html" class="" >
                                <div class="nav_icon_img"><i class="icon-event"></i></div>Event
                            </a>
                        </li><li>
                            <a href="qr-code-generator-for-image.html" class="" >
                                <div class="nav_icon_img"><i class="icon-imagegallery"></i></div>Image Gallery
                            </a>
                        </li><li class="load_more_options">
                        <a href="#">
                            <div class="nav_icon_img"><i class="icon-right_arrow"></i></div>More
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
