$(document).ready(function () {
    //bind the elements with 
    $("[preview-target]").each( function (i, val) {
        
        if($(this).is("input") || $(this).is("text")||$(this).is("textarea"))
        {
            $(this).keyup(function(){
                updatePreview(this);
            });
        }
        else
        {
            $(this).change(function(){
                updatePreview(this);
            });
        }

        updatePreview(this);
    });
});

function updatePreview(el)
{
    if($(el).length)
    {
        var cssTarget = $(el).attr('preview-target');
        if(cssTarget != "undefined" && cssTarget != "")
        {
            var targetType = $(el).attr('preview-target-type');
            //console.log(targetType);
            if(targetType == undefined || targetType == "undefined" || targetType == "")
            {
                targetType = "html";
            }
            var targetVal = $(el).val();
            if(targetVal == undefined || targetVal == "undefined" || targetVal == "")
            {
                targetVal = $(el).attr('placeholder');
                if(targetVal == undefined || targetVal == "undefined")
                    targetVal = "";
            }
            updatePrevieElement(cssTarget, targetType, targetVal);
        }
    }
}

function updatePrevieElement(cssTarget, targetType, targetVal)
{
    //console.log(cssTarget, targetType, targetVal);
    if(targetType == "html" || targetType == "" || targetType == undefined)
    {
        $("" + cssTarget).html(targetVal); 
    }
    else if(targetType == "html-href")
    {
        $("" + cssTarget).html(targetVal); 
        $("" + cssTarget).attr('href', cleanupUrlForLink(targetVal));
    }
    else if(targetType == "fb-like-button")
    {
        var url = 'https://www.facebook.com/plugins/like.php?href='+encodeURIComponent(cleanupUrlForLink(targetVal))+'&width=87&layout=button_count&action=like&size=large&show_faces=true&share=false&height=21';
        $("" + cssTarget).attr('src', url);
    }
    else if(targetType == "val")
    {
        $("" + cssTarget).val(targetVal);
    }
    else if(targetType.startsWith("css:"))
    {
        var typeVal = targetType.split(":");
        $("" + cssTarget).css(typeVal[1], targetVal);
    }
    else if(targetType.startsWith("attr:"))
    {
        var typeVal1 = targetType.split(":");
        $("" + cssTarget).attr(typeVal1[1], cleanupUrlForLink(targetVal));
    }
}

function cleanupUrlForLink(targetVal)
{
    if(targetVal == undefined || targetVal == "")
    return "";

    var hrefVal = targetVal.toLowerCase();
    if(!hrefVal.startsWith("http:") && !hrefVal.startsWith("https:") && !hrefVal.startsWith("//"))
    {
        hrefVal = "http://" + hrefVal;
    }
    return hrefVal;
}