<div class="card-body">
    <form class="page_form" >
        <input type="hidden" name="id" value="new">
        <input type="hidden" name="qr_type" value="S">
        <input type="hidden" name="short_url" value="UsnKVQ60">
        <input type="hidden" name="page" value="url">
        <input type="hidden" name="template_name" value="">
        <div class="card collapse_card mb-3">
            <div class="card-header card_top_header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5 class="mb-0">
                    <a class="btn btn-link collapsed" >
                        Basic Information
                    </a>
                </h5>
            </div>
            <div id="collapseTwo" class="collapse show secondary_color" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body fb_form_fields">
                    <div class="row">
                        <div class="col-md-2" style="padding-top:17px;" >URL or Text</div>
                        <div class="col-md-10">
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg text-webpage" value=""  name="weburl" placeholder="https://www.yoursite.com/">
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="dynamic" >
                                <label class="custom-control-label" for="dynamic">Make dynamic (for tracking & analytics)</label>
                            </div>
                            <input type="hidden" name="dynamic" value=>
                        </div>
                    </div>
                    
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
                </h5>
            </div>
        </div>
    </form>
</div>
<script >
    var get_url_qrcode = "{{route('get_url_qrcode')}}";
    var image_url = "{{url('/qr-code/')}}/"
</script>
<script src="{{asset('/js/custom/generate-url-code.js')}}"></script>