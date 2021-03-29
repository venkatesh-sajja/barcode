var _lastClickedEvent;
var selectedElement = null;
$(document).ready(function () {
    $(".edit_qr_code").on('click',function(e){
        selectedElement = $(this)
        getQRCodeDesignPopup($(this).parents('.qrlist_card').data('id'))
    })

    $(".download_qr_code").on('click', function(e){
        selectedElement = $(this)
        getQRCodeDesignPopup($(this).parents('.qrlist_card').data('id'))
    })

    $('#desgin_qrcode_modal').on('hidden.bs.modal', function (e) {
        var short_url = qrCodeParams.text.split('/')[qrCodeParams.text.split('/').length -1]
        
        $.post('/user/services/api', {
            cmd : 'saveQRparams', 
            id : selectedElement.parents('.qrlist_card').data('id'),
            qrData : JSON.stringify(qrCodeParams),
        }, function(response){
            if(!empty(response.data)){
                getQrImageUrl(short_url, function(url){
                    // debugger
                    selectedElement.parents('.qrlist_card').find('.qrlist_qr_prev').children().attr("src", '');
                    selectedElement.parents('.qrlist_card').find('.qrlist_qr_prev').children().attr("src", url);
                    // setTimeout(function(){
                    //     debugger
                        
                    // },100)
                    
                })
            }
        })
        
    })

    $(".qrlist_card").on("click", function(e){
        if($(this).hasClass('selected')){
            $(this).removeClass('selected')
        }else{
            $(this).addClass('selected')
        }
        var selectedCards = $(".qrlist_card.selected").length;
        if( selectedCards == 0){
            $(".qrlist_select_action").hide()
            $(".qrlist_title").show()
        }else{
            $(".qrlist_select_action span").text(selectedCards+" selected")
            $(".qrlist_select_action").show()
            $(".qrlist_title").hide()
        }

        $('.qrlist_select_action input[type=checkbox]').on('change',function(e){
            if(e.target.checked){
                $(".qrlist_card").addClass('selected')
            }else{
                $(".qrlist_card").removeClass('selected')
                $(".qrlist_select_action").hide()
                $(".qrlist_title").show()
            }
        })
    })
})

function getQRCodeDesignPopup(id){
    $.post('/user/services/api', {
        cmd : 'getQRparams', 
        id : id,
    }, function(response){
        if(!empty(response.data)){
            qrCodeParams =  response.data
            generate()
            $("#desgin_qrcode_modal").modal("show")
        }
    })
    
}


