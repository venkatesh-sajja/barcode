__DO_NOT_SHOW_BLOCKER = 0;
function showLoaderOnBlock(element,obj="chimp")
{
    if(__DO_NOT_SHOW_BLOCKER == 1)
    {
        __DO_NOT_SHOW_BLOCKER = 0;
        return;
    }
    var conf = {
        message: '<img class="chimp_loader" src="/assets/images/qrchimp-loader.svg">',
            overlayCSS: {
                backgroundColor: '#1B2024',
                opacity: 0.85,
                cursor: 'wait',
                'z-index': "1500"
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none',
                color: '#fff',
                'z-index': "2000"
            }
    }
    if(obj == "init"){
        conf.message = '<img class="chimp_loader_goggles" src="/assets/images/qrchimp-loader-goggles.png">'
    }
    if(element){
        $(element).block(conf);
    }else{
        $.blockUI(conf);
    }
    
}

function doNotShowBlocker(count)
{
    if(count == 'undefined') count = 1;
    __DO_NOT_SHOW_BLOCKER = count;
}

function hideLoader(element){
    if(element){
        $(element).unblock();
    }else{
        $.unblockUI();
    }
}

function initLoaderBind()
{
    setLoaderBind();
}

function setLoaderBind()
{
    hideLoader()
    $.ajaxSetup({
        timeout: 30000 //Time in milliseconds
    });
    $(document).bind("ajaxSend", function(){
        showLoaderOnBlock()
      }).bind("ajaxComplete", function(){
        hideLoader()
      }).bind("ajaxError", function(){
        hideLoader()
        console.log("Timeout error!  Kindly refresh the page")
      });
}


function unsetLoaderBind()
{
    hideLoader()
    $(document).unbind("ajaxSend").unbind("ajaxComplete").unbind("ajaxError");
}

$(document).ready(function () {
    $("body").removeClass("loading")
    hideLoader()
    $.ajaxSetup({
        timeout: 30000 //Time in milliseconds
    });
})
//showLoaderOnBlock("init")