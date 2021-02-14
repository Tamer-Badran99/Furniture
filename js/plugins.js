
$(document).ready(function(){
    
$(window).load(function()
{
    // Loading Elements
    
    $(".loading-overlay .lds-ripple").fadeOut(1700,
 function()
{          
        
       $("body").css("overflow","auto");
        
   $(this).parent().fadeOut(1700,
    function()
    {             
       
           $(this).remove();
                            
         });                                                                             
    });
    
});
    
 $("html,body").animate({scrollTop:0}, 200);       
    
// Caching The Scroll Top Element

var scrollButton = $(".sc");

 scrollButton.click(function()
    {                      
        $("html,body").animate({scrollTop:0}, 600);              
                      
    });
    
    
    
    
});