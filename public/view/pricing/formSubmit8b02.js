
window.addEventListener("load", function (event) {
    $("#pricing_period").on("change", function(e){
        let selector = 'month';
        if(e.target.checked){
            selector = 'year';
            $(".yearly_discount").show()
            // $(".mypricing_content .month").text("/Year")
        }else{
            $(".yearly_discount").hide()
            // $(".mypricing_content .month").text("/Month")
        }

        Array.from($(".mypricing_content")).forEach(ele=>{
            $(ele).find('.currency').text($(ele).find('.currency').data(selector))
        })
    })

    $(".mypricing_price_btn").on("click", function(e){
        e.preventDefault()
        if(!amILoggedIn()){
            $('#signup-free').modal("show")
        }else{
            let period = $("input").prop("checked")?'YEARLY':'MONTHLY'
            let plan = $(this).parents(".mypricing_content").data('plan')
            if(plan == 'FR'){
                return
            }
            let auto_renew = $("input[name=auto_renew]").prop('checked')
            _checkOutPopup.showModal(plan, period, function(plan, period, auto_renew){
                showLoaderOnBlock("body")
                RazorPay.createNewOrder(plan, period, auto_renew)
            })
        }
    })
})