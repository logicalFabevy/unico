
$(document).ready(function(){

    $(window).scroll(function(){
      var scroll_top = $(this).scrollTop();

      if (scroll_top > 100) {
        $(".top_header").addClass("active_header");
      }else{
        $(".top_header").removeClass("active_header");
      }
    })


    $(".menu_bar").click(function(){
    	$(this).toggleClass("active_menu_bar");
    	$(".menu_top").toggleClass("active_menu_top");
    })

    
})

