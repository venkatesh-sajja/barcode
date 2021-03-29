const _plan_label = {
    'FR': 'FREE',
    'ST': 'STARTER',
    'PR': 'ULTIMA',
    'PF': 'PRO',
}

const _plan_popup = {

    config: {
        'scan_limit_near': {
            'upgrade_modal_left_img': '/assets/images/popup/upgrade_image_2.png',
            'header': 'Your Dynamic QR codes limit is ending, upgrade your plan today to unlock more features!'
        },
        'scan_limit_reached': {
            'upgrade_modal_left_img': '/assets/images/popup/upgrade_image_5.png',
            'header': 'Your Dynamic QR codes limit is over, upgrade your plan today to unlock more features!'
        },
        'code_limit_near': {
            'upgrade_modal_left_img': '/assets/images/popup/upgrade_image_1.png',
            'header': 'Your Dynamic QR codes limit is ending, upgrade your plan today to unlock more features!'
        },
        'code_limit_reached': {
            'upgrade_modal_left_img': '/assets/images/popup/upgrade_image_4.png',
            'header': 'Your Dynamic QR codes limit is over, upgrade your plan today to unlock more features!'
        },
        'upgrade_statistics': {
            'upgrade_modal_left_img': '/assets/images/popup/upgrade_image_3.png',
            'header': 'Get advanced QR code Statistics, upgrade your plan today to unlock more features!'
        }
    },
    showModal: function (modal_type = 'scan_limit_near') {
        if (document.getElementById('upgrade_custom_modal') == null) {
            $('body').append(` <div class="modal cstm_modal  fade upgrade_custom_modal" id="upgrade_custom_modal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <!-- Modal body -->
                                            <div class="modal-body text-center">
                                                <div class="close_btn" data-dismiss="modal">&times;</div>
                                                <div class="row justify-content-end">
                                                    
                                                    <div class="col-7 order-md-2">
                                                        <div class="cstm_form_content upgrade_box_wrapper">
                                                            <h3 class="upgrade_popup_title">Your Dynamic QR codes limit is ending, upgrade your plan today to unlock more features! </h3>
                                                            <div class="row equal">
                                                                <div class="col p-2">
                                                                    <div class="upgrade_box wd_card_3 p-4">
                                                                        Your Plan<br/>
                                                                        <strong class="current_user_plan">FREE</strong>
                                                                    </div>
                                                                </div>
                                                                <div class="col p-2">
                                                                    <div class="upgrade_box plan_info_text wd_card_2 p-4">
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-4">
                                                                <div class="col p-2">
                                                                    <a href="/pricing" class="btn btn-primary btn-dark  py-2 btn-block">Upgrade Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-5 mt-4 cstm_modal_left_img order-md-1 text-center">
                                                        <img class="img-fluid upgrade_modal_left_img" src="/assets/images/popup/upgrade_image_1.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`)
        }

        $("#upgrade_custom_modal .upgrade_modal_left_img").attr('src', _plan_popup.config[modal_type].upgrade_modal_left_img)
        $("#upgrade_custom_modal .upgrade_popup_title").text(_plan_popup.config[modal_type].header)
        $("#upgrade_custom_modal .current_user_plan").text(_plan_label[extractDataFromArray(user_info, ['plan_info', 'plan'], 'FR')])
        $("#upgrade_custom_modal .plan_info_text").html(_plan_popup.getPlanStats(modal_type.split('_')[0]))
        $("#upgrade_custom_modal").modal('show')
    },

    getPlanStats: function (type) {
        switch (type) {
            case 'scan':
                return 'Usage Alert<br/><strong>' + extractDataFromArray(user_info, ['scan_count', ((new Date()).getMonth() + 1) + '' + ((new Date()).getFullYear())], 0) + '/' + extractDataFromArray(plan_info, [user_info.plan_info.plan, 'MAX_SCAN'], 10) + '</strong><br/>QR scans are used'
            case 'code':
                return 'Usage Alert<br/><strong>' + extractDataFromArray(user_info, ['active_dynamic_codes'], 0) + '/' +  extractDataFromArray(plan_info, [user_info.plan_info.plan, 'DYNAMIC_QR'], 10) + '</strong><br/>QR codes are used'
            case 'statistics':
                return value;
        }
    },
    checkPlanStatus: function () {
        if (typeof user_info != 'undefined') {
            const max_scans = extractDataFromArray(plan_info, [extractDataFromArray(user_info, ['plan_info', 'plan'], 'FR'), 'MAX_SCAN'], 1000);
            const max_dynamic_codes = extractDataFromArray(plan_info, [extractDataFromArray(user_info, ['plan_info', 'plan'], 'FR'), 'DYNAMIC_QR'], 10);
            if (user_info['active_dynamic_codes'] == max_dynamic_codes && max_dynamic_codes != -1) {
                _plan_popup.showModal('code_limit_reached')
            } else if (user_info['active_dynamic_codes'] >= (max_dynamic_codes * 0.8) && max_dynamic_codes != -1) {
                _plan_popup.showModal('code_limit_near')
            } else if (extractDataFromArray(user_info, ['scan_count', ((new Date()).getMonth() + 1) + '' + ((new Date()).getFullYear())], 0) == max_scans && max_scans != -1) {
                _plan_popup.showModal('code_limit_reached')
            } else if (extractDataFromArray(user_info, ['scan_count', ((new Date()).getMonth() + 1) + '' + ((new Date()).getFullYear())], 0) >= (max_scans * 0.8) && max_scans != -1) {
                _plan_popup.showModal('code_limit_near')
            }
        }
    }
}

const _successPopup = {
    init: function () {
        if (document.getElementById('success_code_popup') == null) {
            $('body').append(` <div class="modal fade" id="success_code_popup">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                             <div class="modal-header">
                                                <h5 class="modal-title d-block w-100" id="exampleModalLabel">Success</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <!-- Modal body -->
                                            <div class="modal-body">
                                                <div class="row justify-content-center">
                                                    <span class="text-success">Your QR Code saved successfully!</span>
                                                </div>
                                            </div>
                                            <div class="modal-footer d-flex justify-content-between">
                                                <button type="button" class="btn btn-outline-secondary " data-dismiss="modal">Close</button>
                                                <a href="/user/dashboard" class="btn btn-primary">Go to Dashboard</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`)
        }
    },
    showModal: function () {
        _successPopup.init()
        $("#success_code_popup").modal('show')
    }
}

const _checkOutPopup = {
    callback: null,
    auto_renewal: true,
    init: function () {
        if (document.getElementById('checkout_popup') == null) {
            $('body').append(` <div class="modal fade" id="checkout_popup">
                                    <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content">
                                             <div class="modal-header">
                                                <h6 class="text-center modal-title d-block w-100" id="exampleModalLabel">Please verify the purchase details to proceed for the payment</h6>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <!-- Modal body -->
                                            <div class="modal-body p-5">
                                                <div class="row pb-4">
                                                    <div class="col-md-4">
                                                        <span class="">Package Name</span>
                                                        <h6 class="font-weight-semibold mt-2" id="ch_plan_label">PRO</h6>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <span class="font-12">Payment Plan</span>
                                                                <select id="ch_plan_dropdown" class="form-control mt-2">
                                                                    <option>For a year</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-4 text-right ">
                                                                <span class="font-12">Amount</span>
                                                                <h4 class="font-weight-semibold mt-3 ch_total_amount">$9.99</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div class="row border-top pt-4">
                                                    <div class="col-md-4">

                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="row mb-4">
                                                            <div class="col-md-8">
                                                                <div class="font-weight-semibold font-14 mb-2">Auto Renewal</div>
                                                                <div class="text-muted">Automatically charge the card to renew subscription</div>
                                                            </div>
                                                            <div class="col-md-4 p-2 pr-3 text-right">
                                                                <label class="switch">
                                                                    <input type="checkbox" id="auto_renewal" checked>
                                                                    <span class="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="row border-top total_wrapper">
                                                            <div class="col-md-6">
                                                                <span class="font-weight-semibold ch_total_text">Total</span>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <h4 class="font-weight-semibold mt-2 ch_total_amount">$9.99</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer border-0 d-flex justify-content-end modal-footer pb-5 pr-5">
                                                <button type="button" class="btn btn-primary" id="ch_proceed_btn">Proceed for Payment</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>`)
            $("#ch_proceed_btn").on("click", function (e) {
                // TODO:: restrict period change from Yearly to monthly
                $("#checkout_popup").modal('hide')
                _checkOutPopup.callback(_checkOutPopup.plan, _checkOutPopup.period, $("#auto_renewal").prop("checked") ? 1 : 0)
            })
        }

        $("#ch_plan_label").text(_plan_label[_checkOutPopup.plan])

        $("#ch_plan_dropdown").html('')
        $("#ch_plan_dropdown").append('<option value="MONTHLY" ' + (_checkOutPopup.period == 'MONTHLY' ? 'selected' : '') + '>For a Month</option>')
        $("#ch_plan_dropdown").append('<option value="YEARLY" ' + (_checkOutPopup.period == 'YEARLY' ? 'selected' : '') + '>For a Year (30% Discount)</option>')

        $("#ch_plan_dropdown").off("change").on("change", function (e) {
            _checkOutPopup.period = e.target.value
            _checkOutPopup.updatePlanPrice()
        })

        _checkOutPopup.updatePlanPrice()



    },
    updatePlanPrice: function () {
        if (_checkOutPopup.period == 'MONTHLY') {
            $("#checkout_popup .ch_total_amount").text('$' + _checkOutPopup.plan_data.month)
        } else {
            $("#checkout_popup .ch_total_amount").text('$' + (_checkOutPopup.plan_data.year * 12).toFixed(2))
        }
    },
    showModal: function (plan, period, callback) {
        _checkOutPopup.callback = callback
        _checkOutPopup.plan = plan
        _checkOutPopup.period = period

        const parent_container = $(".mypricing_content[data-plan=" + _checkOutPopup.plan + "]");
        _checkOutPopup.plan_data = parent_container.find(".mypricing_price_tag .currency").data()

        _checkOutPopup.init()
        $("#checkout_popup").modal('show')
    }
}

const _designEditConfirmPopup = {
    init: function () {
        if (document.getElementById('design_edit_confirm_popup') == null) {
            $('body').append(` <div class="modal fade" id="design_edit_confirm_popup">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                             <div class="modal-header d-none">
                                                <h5 class="modal-title d-block w-100" id="exampleModalLabel">Success</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <!-- Modal body -->
                                            <div class="modal-body">
                                                <div class="row justify-content-center">
                                                    <span class="py-4">Do you want to save the changes?</span>
                                                </div>
                                            </div>
                                            <div class="modal-footer d-flex justify-content-between">
                                                <button type="button" class="btn btn-outline-secondary " data-dismiss="modal">Discard</button>
                                                <button type="button" class="btn btn-primary" id="btn_design_edit_confirm">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`)
            $("#btn_design_edit_confirm").on("click", function (e) {
                saveQROptions();
		$("#design_edit_confirm_popup").modal('hide')
            })
        }
    },
    showModal: function () {
        _designEditConfirmPopup.init()
        $("#design_edit_confirm_popup").modal('show')
    }
}

window.addEventListener("load", function (event) {
    if (page == 'createTemplate') {
        _plan_popup.checkPlanStatus()
    }
});
