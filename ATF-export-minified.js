javascript:function copyToClipboard(element){element=$('<textarea>').appendTo('body').val(element).select();document.execCommand('copy');element.remove();}var output="% | Vendor | Flavor\n---|---|----\n";var i=1;$('*[id^="flavors-"] tr td').each(function(){var info=$(this).text().trim();var separator=" | ";if(i%3===0){separator="\n"}if(info==""||info.startsWith("Total")||info.startsWith("This")){}else{output+=info+separator;i++;}});copyToClipboard(output);