
/**  
 * Color picker
 */

var ColorPicker = {
    primaryElement: null,
    secondaryElement: null,
    clickFromIcon:false,
    init: function (primarySelector, secondarySelector) {
        $(".colorpicker-1").spectrum({ preferredFormat: "hex" })
        $(".colorpicker-2").spectrum({ preferredFormat: "hex" })
        ColorPicker.primaryElement = primarySelector
        ColorPicker.secondaryElement = secondarySelector
        ColorPicker.eventHandlers()
    },
    eventHandlers: function () {
        $(".color_picker_icon").on("click",function(e){
            ColorPicker.clickFromIcon = true;
            // setTimeout(function(e){
            //     console.log("click")
                $(this).parent().children('.sp-replacer').click()
            // },10)
            e.stopImmediatePropagation()
            // debugger
            return;
        })
        $(".qr_color_panel li").on('click', function (e) {
            $(".qr_color_panel li").removeClass('active')
            $(this).addClass('active')
            var color1 = ColorPicker.rgbToHex($(this).children().children()[0].style['backgroundColor'])
            var color2 = ColorPicker.rgbToHex($(this).children().children()[1].style['backgroundColor'])
            $(".colorpicker-1-input").val(color1)
            $(".colorpicker-2-input").val(color2)
            $(".colorpicker-1").val(color1)
            $(".colorpicker-2").val(color2)
            ColorPicker.changeIconColor(color1, $(".colorpicker-1"))
            ColorPicker.changeIconColor(color2, $(".colorpicker-2"))
            $(".colorpicker-1").spectrum({ preferredFormat: "hex" })
            $(".colorpicker-2").spectrum({ preferredFormat: "hex" })
            $("input[name=primary_color]").val(color1)
            $("input[name=secondary_color]").val(color2)

            setCssVar('theme-color-primary', color1)
            setCssVar('theme-color-secondary', color2)
            //ColorPicker.primaryElement.css('background-color', color1)
            //ColorPicker.secondaryElement.css('background-color', color2)
        })
        $(".colorpicker-1-input").on("keyup", function (e) {
            //ColorPicker.primaryElement.css('background-color', e.target.value)
            setCssVar('theme-color-primary', e.target.value)
            $(".colorpicker-1").val(e.target.value)
            ColorPicker.changeIconColor(e.target.value, $(this))
            $(".colorpicker-1").spectrum({ preferredFormat: "hex" })
            $("input[name=primary_color]").val(e.target.value)
        })
        $(".colorpicker-1").on("change", function (e) {
            //ColorPicker.primaryElement.css('background-color', e.target.value)
            setCssVar('theme-color-primary', e.target.value)
            ColorPicker.changeIconColor(e.target.value, $(this))
            $(".colorpicker-1-input").val(e.target.value)
            $("input[name=primary_color]").val(e.target.value)
        })

        $(".colorpicker-2").on("change", function (e) {
            //ColorPicker.secondaryElement.css('background-color', e.target.value)
            setCssVar('theme-color-secondary', e.target.value)
            ColorPicker.changeIconColor(e.target.value, $(this))
            $(".colorpicker-2-input").val(e.target.value)
            $("input[name=secondary_color]").val(e.target.value)
        })
        $(".colorpicker-2-input").on("keyup", function (e) {
            //ColorPicker.secondaryElement.css('background-color', e.target.value)
            setCssVar('theme-color-secondary', e.target.value)
            $(".colorpicker-2").val(e.target.value)
            ColorPicker.changeIconColor(e.target.value, $(this))
            $(".colorpicker-2").spectrum({ preferredFormat: "hex" })
            $("input[name=secondary_color]").val(e.target.value)
        })
    },
    componentToHex: function (c) {
        var hex = c.toString(16);
        return (hex.length == 1 ? "0" + hex : hex).toUpperCase();
    },
    rgbToHex: function (color) {
        color = color.replace('rgb(', '')
        color = color.replace(')', '')
        color = color.split(',')
        return "#" + ColorPicker.componentToHex(parseInt(color[0])) + ColorPicker.componentToHex(parseInt(color[1])) + ColorPicker.componentToHex(parseInt(color[2]));
    },
    changeIconColor: function (hex, selector) {
        var rgb = ColorPicker.hexToRgb(hex)
        var o = Math.round(((parseInt(rgb[0]) * 299) +
            (parseInt(rgb[1]) * 587) +
            (parseInt(rgb[2]) * 114)) / 1000);
        var fore = (o > 125) ? 'black' : 'white';
        // var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
        selector.parent().children('.color_picker_icon').css('color', fore);
        // $('#bg').css('background-color', back);
    },
    hexToRgb: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
         ] : null;
      }
      
}
    




