(function($) {
var App = { init: function() { 
							   App.setHeight();	
							   App.ScrollToSomeplace();        // script resposible for smooth scrolling after clicking on menu item
							   App.Fit_Vids();                 // responsive videos
							   App.Reviews();                  // reviews carousel
							   App.Nivo_Lightbox();            // lightbox
							   App.Elements_animation();       // animations
							   App.Fastclick();                // fastclick
							   App.ContactForm();                // fastclick 
							   },


	
	// Set Height
    setHeight: function() {
	    navbarheight = $("#nav_bar").outerHeight()+1;
    },
	
	// Scroll To ...
    ScrollToSomeplace: function() {
    $('.go_to_home').click(function () {$.scrollTo('.hero_fullscreen',1000,{easing:'easeInOutExpo','axis':'y'});return false}); 
    
    var lastId,

    topMenu = $('.navigation_js, #mobile_menu_content');
    menuItems = topMenu.find('a');
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
 
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+25;
        $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
 
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+navbarheight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
                                if ($(this).offset().top < fromTop)
                                return this;
                                });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    
    },
    
    // Elements Animation
    Elements_animation: function() {
    	$('#home').waypoint(function() {
            setTimeout(function(){$('.home_anim1').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('.home_anim2').addClass('animated fadeIn')},500);
            setTimeout(function(){$('.home_anim3').addClass('animated fadeInUp')},700);
            setTimeout(function(){$('.home_anim4').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.home_anim5').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.home_anim6').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('.home_anim7').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.home_anim8').addClass('animated fadeInUp')},1400);
            setTimeout(function(){$('.home_anim9').addClass('animated fadeInUp')},1600);
            setTimeout(function(){$('.home_anim10').addClass('animated fadeInUp')},2000);
        }, { offset: '10%' });
    
    	$('#about').waypoint(function() {
            setTimeout(function(){$('.more_info_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.more_info_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.more_info_anim3').addClass('animated fadeInUp')},300);
            setTimeout(function(){$('.more_info_anim4').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.more_info_anim5').addClass('animated fadeInUp')},500);
            setTimeout(function(){$('.more_info_anim6').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.more_info_anim7').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.more_info_anim8').addClass('animated fadeInUp')},1400);
            setTimeout(function(){$('.more_info_anim9').addClass('animated fadeInUp')},1600);
            setTimeout(function(){$('.more_info_anim10').addClass('animated fadeInUp')},2000);
        }, { offset: '50%' });
        
        
        $('#features').waypoint(function() {
            setTimeout(function(){$('.features_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.features_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.features_anim3').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.features_anim4').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.features_anim5').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.features_anim6').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('.features_anim7').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.features_anim8').addClass('animated fadeInUp')},1400);
            setTimeout(function(){$('.features_anim9').addClass('animated fadeInUp')},1600);
            setTimeout(function(){$('.features_anim10').addClass('animated fadeInUp')},2000);
        }, { offset: '50%' });
    
    	$('#screenshots').waypoint(function() {
            setTimeout(function(){$('.screenshots_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.screenshots_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.screenshots_anim3').addClass('animated fadeInUp')},300);
            setTimeout(function(){$('.screenshots_anim4').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.screenshots_anim5').addClass('animated fadeInUp')},500);
            setTimeout(function(){$('.screenshots_anim6').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.screenshots_anim7').addClass('animated fadeInUp')},700);
            setTimeout(function(){$('.screenshots_anim8').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.screenshots_anim9').addClass('animated fadeInUp')},900);
            setTimeout(function(){$('.screenshots_anim10').addClass('animated fadeInUp')},1000);
        }, { offset: '50%' });
        
        $('#testimonials').waypoint(function() {
            setTimeout(function(){$('.testimonials_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.testimonials_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.testimonials_anim3').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.testimonials_anim4').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.testimonials_anim5').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.testimonials_anim6').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.testimonials_anim7').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.testimonials_anim8').addClass('animated fadeInUp')},1400);
            setTimeout(function(){$('.testimonials_anim9').addClass('animated fadeInUp')},1600);
            setTimeout(function(){$('.testimonials_anim10').addClass('animated fadeInUp')},1800);
        }, { offset: '50%' }); 
        
        $('#pricing').waypoint(function() {
            setTimeout(function(){$('.pricing_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.pricing_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.pricing_anim3').addClass('animated fadeInUp')},300);
            setTimeout(function(){$('.pricing_anim4').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.pricing_anim5').addClass('animated fadeInUp')},500);
            setTimeout(function(){$('.pricing_anim6').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.pricing_anim7').addClass('animated fadeInUp')},700);
            setTimeout(function(){$('.pricing_anim8').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.pricing_anim9').addClass('animated fadeInUp')},900);
            setTimeout(function(){$('.pricing_anim10').addClass('animated fadeInUp')},1000);

        }, { offset: '50%' });
        

    
    },
    
    
    // Nivo Lightbox
    Nivo_Lightbox: function() {
    
	    $('#Play_Video').nivoLightbox({
		    effect: 'slideDown', 
		    afterHideLightbox: function(){ $('#video_modal_box iframe').attr("src", jQuery("#video_modal_box iframe").attr("src"));}   
	    });	
	    
	    $('.mdl-card__menu a').nivoLightbox({effect: 'slideDown'});
    },

    
    // Fit Vids
    Fit_Vids: function() {
	    $("#video_modal_box").fitVids();	
    },
    
    
    // Reviews Carousel
    Reviews: function() {
	    $(".owl-carousel").owlCarousel({
		    loop:true,
		    singleItem : true,
	    });	
    },   
    
    Fastclick: function() {
	    FastClick.attach(document.body);
    },
    


    // Contact Form
    ContactForm: function() {
	     "use strict";
	    var options = {target: "#alert"}
	    $("#redeem-form").ajaxForm(options);
    },


}

$(function() {
  App.init();
  $(window).resize(App.setHeight);
    
});

})(jQuery);

function showLoading(){
    //$("#loader").show();
}
function hideLoading(){
    //$("#loader").hide();
}
server = "./php/";
function serviceMsg(funcName, paramArray, handler)
{
	var message = {jsonrpc : "2.0", method : funcName, params : paramArray, id : 1 };
	
	request.post(server + "service_eh2.php", message,handler);
}
var request = {};
request.post = function(address, message, callback){
	var urlTarget = address;
	var msEpoch = new Date().getTime();

	if (urlTarget.indexOf("?") <= 0)
		urlTarget += "?timeStamp=" + msEpoch;
	else
		urlTarget += "&timeStamp=" + msEpoch;

	window.ajaxRequest = $.ajax({url: urlTarget,
		data: JSON.stringify(message),
		type: 'POST',
		dataType : "json",
		headers: {'Accept': 'application/json','Access-Control-Allow-Origin': '*'},
		crossDomain: true,
		beforeSend: function() {
			showLoading();
		},
		complete: function() {
			hideLoading();
		},
		success: function (result) {
			try{
				if (true)
				{
					callHandler = true;
					var handlerFunc = null;
					var handlerObj = null;

					if (typeof(callback) == "function")
						handlerFunc = callback;
					else if ((callback instanceof Array) && (callback.length == 2) && (typeof(callback[1]) == "function"))
					{
						handlerObj = callback[0];
						handlerFunc = callback[1];
					}

					if (handlerFunc != null)
					{
						var response = result;


						try
						{
							//alert(response);
							var responseMessage = response;
						}
						catch (e)
						{
							alert( "Calling " + message.methodName + ", returning invalid response :" + response);
							return;
						}

						if (responseMessage.error == null)
							handlerFunc.call(handlerObj, responseMessage.result);
						else
							alert("Calling " + message.methodName + ", returning Object Error : " + responseMessage.error);
					}
				}

			}catch(e){
                hideLoading();
				 //application.alert("error", "Calling " + message.methodName + ", returning Server Error : " + e + " : " + response,200);
                 alert("Calling " + message.methodName + ", returning Server Error : " + e + " : " + response);
				 return false;
			 }
		},
		error: function (request,error, thrown) {
			//application.alert("error", ERR_CONN +"<br>"+error+" - "+thrown, 200);
            hideLoading();
            //alert("<br>"+error+" - "+thrown);
			return false;
		}
	});
};
/*
echo "<div class=\"alert alert-block alert-danger\">";
echo "<div class=\"alert_title\"><p><strong>" . $iserrormessage . "</strong></p></div>";
echo "<ul class=\"unordered\">";
echo $alert;
echo "</ul>";
echo "</div>"; 
*/

$("#redeem-name").on("keyup", function(){
    //console.log($("#contact-name").val());
    try{
        if (window.ajaxRequest !== undefined)
            window.ajaxRequest.abort();
        //if ($("#contact-name").val().length ==  14)
        {
            serviceMsg("getVoucher",[$("#redeem-name").val()], function(data){
                try{
                    console.log(data);
                    if (data.voucher){
                        //$("#info").html("Voucher ini berlaku untuk " + data.voucher.bulan +" bulan ");
                        $("#message").addClass("success").stop().slideDown("normal").fadeIn("normal").delay(3000).slideUp("normal");
                        //$("#alert2").show();
                        $("#alert").html("<div class=\"alert alert-block alert-danger\">"+
                                        "<div class=\"alert_title\"><p><strong>Voucher ini berlaku untuk " + data.voucher.bulan +" bulan </strong></p></div>"+
                                        "<ul class=\"unordered\">"+
                                        "</ul>"+
                                        "</div>");
                    }else if ($("#redeem-name").val().length == 14){
                        //$("#info").html("Voucher ini tidak ditemukan. ");
                        //alert("voucher faield");
                        //$("#alert2").show();
                        $("#message").addClass("warning").stop().slideDown("normal").fadeIn("normal").delay(3000).slideUp("normal");
                        $("#alert").html("<div class=\"alert alert-block alert-danger\">"+
                                        "<div class=\"alert_title\"><p><strong>Voucher ini tidak ditemukan</strong></p></div>"+
                                        "<ul class=\"unordered\">"+
                                        "</ul>"+
                                        "</div>");
                    }
                }catch(e){
                    alert(e);
                }
            });
        }
            
    }catch(e){
        alert(e);
    }
    
});