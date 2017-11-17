/*
    AUTHOR: LAURENZ (laurenz@outlook.ph)
*/

var totalCount = 0;

function addNew() 
{
    console.log("pressed me");
    var count = document.getElementsByName('copied').length + 0;
    document.getElementsByName('countHere')[totalCount].innerHTML = count;
    totalCount = totalCount + 1;
    var dup   = document.getElementById('copy-me');    
    
    var cln   = dup.cloneNode(true);
    
    document.getElementById('cloneHere').appendChild(cln);
    
    var last  = document.getElementsByName('countHere').length + 0;
    document.getElementById('output').innerHTML = count + ' and ' + last;
}

$(document).ready(
    function()
    { 
        var bodyheight = $(window).height();        
        $(".windowheight").css('min-height', bodyheight);
        
        $(window).resize(
            function()
            {
                var bodyheight = $(window).height();
                $(".windowheight").css('min-height', bodyheight);
            }
        ); 
    }
);


/*
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.changeMe');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 
                        'rgb(10, 27, 32)');
       } else {
          $('.nav').css('background-color', 'transparent');
       }
   });
});
*/
