jQuery(document).ready(function(){  
    "use strict"
     $('.slider').ripples({
       dropRadius: 11,
       perturbance: 0.01, 
     });

     $(window).scroll(function(){
        
        var top = $(window).scrollTop();
         if(top>=100){
           $(".navbar").addClass('secondary'); 
         }
         else 
             if($(".navbar").hasClass('secondary')){
                 $(".navbar").removeClass('secondary'); 
             }
     });
    
     $('.work-area').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    $("#team-members").owlCarousel({
      loop:true,
      smartSpeed:700,
      margin:10,
      // nav:true,
      items:3,
      autoplay:true,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
  });


var options = {
  strings: ['<span> I love </span> <span class = "primary">codings.</span>', 'and love to <span class = "primary">share!!!</span>'],
  typeSpeed: 40,
  loop:true
};

var typed = new Typed('.text', options);



