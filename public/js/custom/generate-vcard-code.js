var campaignData = {};
var generate_vcard_code = function(){
    var onLoad = function () {
        saveQrCampaign();
        $(".show_loader").hide();

    }

    var getUrlQrCode = function (url) {
        
         $(".show_loader").show();
        if (url !== '' && amILoggedIn()) {
            $.ajax({
                url: get_url_qrcode,
                data: {
                    url:url
                },
                beforeSend:function() {
                    $(".show_loader").show()
                },
                type: 'GET',
                dataType: 'HTML',
                success: function (data) {
                    $(".gntr_qrcode_img").html(data)
                        $(".show_loader").hide();
                }
            })
        }
        
        
    }
    var saveQrCampaign = function () {
         $(document).on('click', '.save_qr_campaign',function(e){
            var name = $("#campaign_name_qr").val();
            var data = serializeFormObject($(".page_form"));
            var keys = Object.keys(data);
            console.log(data);
            value = '';
            if(data.first_name != ''){
                value = 'First Name:'+data.first_name+'\n';
            }
            if(data.last_name != ''){
                value += 'Last Name:'+data.last_name+'\n';
            }
            if(data.phone_number != ''){
                value += 'Numer:'+data.phone_number+'\n';
            }
             if(data.tel_number != ''){
                value += 'Telephone Number:'+data.tel_number+'\n';
            }
            if(data.email != ''){
                value += 'Email:'+data.email+'\n';
            }
            if(data.company != ''){
                value += 'Company:'+data.company+'\n';
            }
            if(data.designation != ''){
                value += 'Designation:'+data.designation+'\n';
            }
            if(data.street != ''){
                value += 'Street:'+data.street+'\n';
            }
            if(data.city != ''){
                value += 'City:'+data.city+'\n';
            }
            if(data.zipcode != ''){
                value += 'Zipcode:'+data.zipcode+'\n';
            }
            if(data.state != ''){
                value += 'State:'+data.state+'\n';
            }
            if(data.country != ''){
                value += 'Country:'+data.country+'\n';
            }
            if(data.website != ''){
                value += 'Website:'+data.website+'\n';
            }
            if (value !== '') {
                $.ajax({
                    url: save_campaign,
                    data: {
                        value: value,
                        qr_type: qr_type,
                        name:name
                    },
                    beforeSend:function() {
                        $(".show_loader").show()
                    },
                    method: 'GET',
                    dataType: 'JSON',
                    success: function (data) {
                        console.log(data);
                        getUrlQrCode(value);
                        $("#template_name_modal").modal('hide')
                        $(".show_loader").hide();
                    }
                })
            }
        })
    }
    return {
        init: function () {
            onLoad()
        }
        
    }
}();
generate_vcard_code.init();

