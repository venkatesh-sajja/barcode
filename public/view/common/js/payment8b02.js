const RazorPay = {
    KEY: 'rzp_live_zKqrMuhb7pr0KK',
    TEST_KEY: 'rzp_test_alDpvsj4wHIaVQ',
    NAME: 'QRCodeChimp',
    DESC: 'TezMinds Software Pvt. Ltd',
    LOGO: 'https://www.qrcodechimp.com/assets/images/qrcodechimp-icon.svg',
    createNewOrder: function (plan, period, auto_renewal) {
        showLoaderOnBlock("body")
        $.post('/user/services/api', {
            cmd: 'createNewOrder',
            plan: plan,
            period: period,
            auto_renewal: auto_renewal
        }, function (response) {
            hideLoader("body")
            if (response.errorCode == 0) {
                // RazorPay.initPayment(extractDataFromArray(response, ['data', 'id']), extractDataFromArray(response, ['data', 'amount']), extractDataFromArray(response, ['data', 'currency']))
                if(extractDataFromArray(response, ['data', 'plan_update'],0)){
                    // location.href = '/user/account';
                }else{
                // location.href = '/payment?action=T&order_id='+extractDataFromArray(response, ['data', 'id'],'')+'&amount='+extractDataFromArray(response, ['data', 'amount'],'')+'&currency='+extractDataFromArray(response, ['data', 'currency'],'')+'&subscription_id='+extractDataFromArray(response, ['data', 'subscription_id'],'')

                RazorPay.initPayment(extractDataFromArray(response, ['data', 'id'],''), extractDataFromArray(response, ['data', 'subscription_id'],''),extractDataFromArray(response, ['data', 'amount'],''),extractDataFromArray(response, ['data', 'currency'],''))
                }
            }else{
                alert(response.errorMsg)
                location.href = '/payment?status=failure'
            }
        })
    },
    initPayment: function (order_id, subscription_id, amount, currency) {
        var options = {
            "key": location.host.split('.')[0] == 'www'?RazorPay.KEY : RazorPay.TEST_KEY, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": currency,
            "name": RazorPay.NAME,
            "description": RazorPay.DESC,
            "image": RazorPay.LOGO,
            "subscription_id": subscription_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "customer_id" : "cust_GEVaIdZuZ9hfCo",
            // "handler": function (response) {
            //     debugger
            //     RazorPay.verifyPayment(extractDataFromArray(response, ['razorpay_payment_id']), extractDataFromArray(response, ['razorpay_signature']), extractDataFromArray(response, ['razorpay_order_id']));
            // },
            "prefill": {
                'name': extractDataFromArray(user_info, ['fname']),
                'email': extractDataFromArray(user_info, ['email']),
                'contact': extractDataFromArray(user_info, ['phone'],''),
            },
            // "notes": {},
            "theme": {
                "color": "#4d77fa",
                backdrop_color :'#ccccccdf'
            },
            "callback_url": location.origin +"/payment",
            "modal": {
                "ondismiss": function(){
                    location.href = '/payment?status=failure'
                }
            },
            // remember_customer : true,
            // save : 1,
        };

        if(!empty(order_id)){
            options.order_id = order_id
            delete options.subscription_id
        }

        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            RazorPay.onPaymentFailure()
        });
        rzp1.open()
    },
    verifyPayment: function (razorpay_payment_id, razorpay_signature, razorpay_order_id, razorpay_subscription_id) {
        $.post('/user/services/api', {
            'cmd': 'verifyPayment',
            'razorpay_payment_id': razorpay_payment_id,
            'razorpay_signature': razorpay_signature,
            'razorpay_order_id': razorpay_order_id,
            'razorpay_subscription_id': razorpay_subscription_id,
        }, function (response) {
            hideLoader("body")
            location.href = '/payment?status=success'
        })
    },
    onPaymentFailure: function (response) {
        $.post('/user/services/api', {
            'cmd': 'paymentFailure',
            'error': response.error,
        }, function (response) {
            console.log(response)
            
        })
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
    }
}