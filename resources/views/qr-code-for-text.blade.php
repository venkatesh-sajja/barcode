@extends('layout.layout')
@section('content')
<section>
   <div class="container mt-4">
      <div class="row">
         <div class="col-md-8 p-0 pl-3">
            <div class="card">
               <div class="card-header d-flex justify-content-between align-items-center">
                  <h1 class="gntr_form_title pageTitle mb-0">QR Code Generator for Text</h1>
                  <a id="step_by_step_guide_btn" class=" d-none" href="#" class="btn btn-link font-14"><i class="icon-guide font-18 mr-2" style="vertical-align: text-bottom;"></i> Step by step guide</a>
               </div>
               <div class="card-body">
                  <form class="page_form">
                     <input type="hidden" name="id" value="new">
                     <input type="hidden" name="qr_type" value="S">
                     <input type="hidden" name="page" value="text">
                     <input type="hidden" name="template_name" value="">
                     <input type="hidden" name="short_url" value="">
                     <div class="card collapse_card mb-3">
                        <div class="card-header card_top_header" id="headingTwo"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <h5 class="mb-0">
                              <a class="btn btn-link collapsed">
                              Basic Information
                              </a>
                           </h5>
                        </div>
                        <div id="collapseTwo" class="collapse show secondary_color" aria-labelledby="headingTwo" data-parent="#accordion">
                           <div class="card-body fb_form_fields">
                              <div class="row">
                                 <div class="col-md-3">Text</div>
                                 <div class="col-md-9">
                                    <div class="form-group">
                                       <textarea type="text" rows="6" class="form-control form-control-lg text-webpage" autofocus id="text-qr-code" name="text" placeholder="Text here."></textarea>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card collapse_card">
                        <div class="card-header card_top_header collapsed open_design_code_popup" id="headingTwo" data-toggle="modal" data-target="#gntr_prebuilt_tab" aria-expanded="false" aria-controls="collapseThree">
                           <h5 class="mb-0">
                              <a class="btn btn-link collapsed">
                              Design, Color and Decorate QR Code
                              </a>
                           </h5>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="card-footer">
                  <button class="btn btn-primary btn-lg gntr-qr-btn w-100 mt-2 mb-2 submit_qr_code" type="button">Save QR
                  Code <i class="icon-right_arrow font-16 easin ml-2"></i></button>
               </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="gntr_qrcode_preview_wrapper card">
               <div class="card-body">
                  <!-- <div class="gntr_embed"><span class="icon-code"></span></div> -->
                  <div class="gntr_qrcode_preview">
                     <div class="gntr_qrcode_img preview_qr_img">
                        <img  id="qrcode_preview1" src="{{url('/default-qr-code/qr-code.png')}}">
                     </div>
                  </div>
                  <div class="gntr_qrcode_setting">
                     <ul class="nav mb-3 gntr_qrcode_setting_nav" id="gntr-tab" role="tablist1">
                        {{-- <li class="nav-item">
                           <a class="nav-link active" id="gntr_sticker_tab" data-toggle="pill1" href="#gntr_sticker" role="tab" aria-controls="gntr_sticker" aria-selected="true">sticker</a>
                        </li> --}}
                        {{-- <li class="nav-item">
                           <a onclick="showDesignPopUp('#gntr_color_tab-1'); return false;" class="nav-link" id="gntr_color_tab" data-toggle="pill1" href="#gntr_color" role="tab" aria-controls="pills-profile" aria-selected="false">color</a>
                        </li> --}}
                        {{-- <li class="nav-item">
                           <a onclick="showDesignPopUp('#gntr_shape_tab-1'); return false;" class="nav-link" id="gntr_shape_tab" data-toggle="pill1" href="#gntr_shape" role="tab" aria-controls="pills-contact" aria-selected="false">Shapes</a>
                        </li> --}}
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
                              <a href="#" class="gntr_sticker_list_more" data-target="#gntr_prebuilt_tab-1">
                              <i class="icon-color-panel"></i> More Designs to Decorate QR <i class="icon-right_arrow font-14"></i><i class="icon-right_arrow font-14"></i>
                              </a>
                           </ul>
                        </div>
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
                        
                     </div>
                  </div>
                  <div class="gntr_download p-4 pt-0">
                     <a href="#" id="download" class="btn btn-primary gntr_download_btn w-100">
                        Download Large Size <i class="icon-down-arrow ml-2"></i>
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
   <div class="container mt-5">
      <div class="">
         <div class="">
            <h1><b>QR Code Generator for Text</b></h1>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><b><span style="font-size: medium;">We have seen QR codes for a business card or Vcard but even for a smaller application like text, it's possible. It's effective &amp; reaches to the audience.&nbsp;</span><span style="font-size: medium; color: inherit; font-family: inherit;">Let's create a Text QR code!</span></b></p>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><span style="font-size: medium;">Create a text QR code in just 3 easy steps:</span></p>
            <p><span style="font-size: medium;"><span style="font-weight: bold;">1.</span>&nbsp;Name your QR code. Enter the text you want to display after a scan.<br /></span></p>
            <p><span style="font-size: medium;"><img class="alignnone wp-image-1990" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/text.png" alt="" width="524" height="322" /></span></p>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><span style="font-size: medium;"><span style="font-weight: bold;">2.</span>&nbsp;You can design your code with a sticker, colour and shapes of your choice. You can also upload your logo and place it within the QR code.</span></p>
            <p><span style="font-size: medium;"><img class="alignnone size-medium wp-image-1885" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/scan-me-224x300.png" alt="" width="224" height="300" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img class="alignnone size-medium wp-image-1886" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/color-qr-code-239x300.png" alt="" width="239" height="300" /><br /></span></p>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><span style="font-size: medium;"><img class="alignnone size-medium wp-image-1887" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/shape-qr-code-240x300.png" alt="" width="240" height="300" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img class="alignnone size-medium wp-image-1888" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/logo-qr-239x300.png" alt="" width="239" height="300" /></span></p>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><span style="font-size: medium;"><span style="font-weight: bold;">3.&nbsp;</span>Save your QR code. Hurray! your QR code is ready.<br /></span></p>
            <p><span style="font-size: medium;"><img class="alignnone wp-image-1991" src="../qrcodechimp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/qr-vcard-1.png" alt="" width="266" height="350" /><br /></span></p>
            <p><span style="font-size: medium;">&nbsp;</span></p>
            <p><span style="font-size: medium;">Download &amp; share your QR code.</span></p>
            <p><span style="font-size: medium;">You might be interested to make <a href="user/404.html?id=new" target="_blank" rel="noopener">QR code for URL.</a></span></p>
         </div>
      </div>
   </div>
</section>
<script >
    var get_url_qrcode = "{{route('get_url_qrcode')}}";
    var save_campaign = "{{route('save_campaign')}}";
    var upload_custom_logo = "{{route('upload_custom_logo')}}";
    var image_url = "{{url('/qr-code/')}}/";
    var qr_type = 'Text';
    var csrf_token = "{{ csrf_token() }}";
    var public_uploads = "{{url('uploads')}}/"
</script>
<script src="{{asset('/js/custom/qr-code-for-text.js')}}"></script>
<script src="{{asset('/js/custom/add-custom-logo.js')}}"></script>
@endsection