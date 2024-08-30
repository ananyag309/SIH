/*---------------------------------------------------------------------*/ ;
(function($) {
/*================= Global Variable Start =================*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var IEbellow9 = !$.support.leadingWhitespace;
var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
function isIEver() {var myNav = navigator.userAgent.toLowerCase();return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;}
//if (isIEver () == 8) {}
var ww = document.body.clientWidth,	wh = document.body.clientHeight; 
var mobilePort = 1024, ipadView = 1024, wideScreen = 1600;
/*================= Global Variable End =================*/

/*================= On Document Load Start =================*/
$(document).ready(function() {
	$('body').removeClass('noJS').addClass("hasJS");
	$(this).scrollTop(0);
	getWidth();

	//Custom Select
	if ($(".customSelect").length) {
		$('.customSelect').customSelect();
	}
	if ($(".colRight").length) {
		$('body').addClass("homePage");
	}
	
	$('#openguestmodal').click(function(){
		 $("#guestModal").modal('show');
		 $("#loginModal").modal('hide');
    });
	
	$('#validateOTPmodal').click(function(){
		 $("#validatemodal").modal('show');
		 $("#guestModal").modal('hide');
    });
	
	$('#forgotPasswordLink').click(function(){
		 $("#forgotPasswordmodal").modal('show');
		 $("#loginModal").modal('hide');
    });
	
	$('#forgotPasswordLinkAdmin').click(function(){
		 $("#forgotPasswordmodal").modal('show');
		 $("#adminModal").modal('hide');
    });
	
	$('#sendOTPmodal').click(function(){
		 $("#validatemodal").modal('show');
		 $("#loginModal").modal('hide');
    });
	
	$('.signUpBtn').click(function(){
		$(".signUpTab").trigger( "click" );
    });
	$('.loginBtn').click(function(){
		$(".logInTab").trigger( "click" );
    });
	
	
	//Rating Star
	var $s2input = $('#input-1');
    $('#ratingStar').starrr({
      max: 5,
      rating: $s2input.val(),
      change: function(e, value){
    	  if(value <3)
  		{
    			$(".ratingtext").html("Unsatisfactory");
    			}
    		if(value >=3 && value <5)
    		{
    		$(".ratingtext").html("Satisfactory");
    		}
    		if(value==5)
    		{
    		$(".ratingtext").html("Excellent");
    		}
    		
        $s2input.val(value).trigger('input');
      }
    });
	
	//Date & Time picker
	var todayDate = new Date().getDate();
	var endD= new Date(new Date().setDate(todayDate - 6));
	var currDate = new Date();
	if ($(".datetimepicker").length) {
		$('.datetimepicker').datetimepicker({
			maxDate: currDate,
			minDate: endD,
			format : 'DD/MM/YYYY HH:mm'
		});
	}
	
	setTimeout(function(){ $(".siteLoading").addClass("hide"); }, 1500);

	// Page Scrolling
	$('a[href="#content"]').click(function() {
		skipTo = $(this).attr('href');
		skipTo = $(skipTo).offset().top - 10;
		$('html, body').animate({
			scrollTop: skipTo
		}, '1000');
		return false;
	});

	// Marquee Scrolling
	if ($(".marqueeScrolling li").length > 1) {
		var $mq = $('.marquee').marquee({
			speed: 25000,
			gap: 0,
			duplicated: true,
			pauseOnHover: true
		});
		$(".btnMPause").toggle(function() { 
			$(this).addClass('play');
			$(this).text('Play');
			$mq.marquee('pause');
		}, function() {
			$(this).removeClass('play');
			$(this).text('Pause');
			$mq.marquee('resume');
			return false;
		});
	};

	// Multiple Ticker	
	if ($(".ticker").length) {
		$('.ticker').each(function(i) {
			$(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
			$('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
			$('#ticker' + i).find('a.playPause').attr('id', 'stopNews' + i)
			$('#newsTikker' + i).vTicker({
				speed: 1E3,
				pause: 4E3,
				animation: "fade",
				mousePause: false,
				showItems: 3,
				height: 150,
				direction: 'up'
			})
			$("#stopNews" + i).click(function() {
				if ($(this).hasClass('stop')) {
					$(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
				} else {
					$(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
				}
				return false;
			});
		});
	};



	// Responsive Tabing Script
	if ($(".resTab").length) {
		$('.resTab').responsiveTabs({
			rotate: false,
			startCollapsed: 'accordion',
			collapsible: 'accordion',
			scrollToAccordion: true,
			scrollToAccordionOnLoad: false
		});
	};

	// Accordion

		$('.accordion .accordDetail').hide();
		$(".accordion .accordDetail:first").show();
		$(".accordion .accTrigger:first").addClass("active");
		$('body').on('click', '.accordion .accTrigger', function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next().slideUp();
			} else {
				if ($('body').hasClass('desktop')) {
					$('.accordion .accTrigger').removeClass('active');
					$('.accordion .accordDetail').slideUp();
				}
				$(this).addClass('active');
				$(this).next().slideDown();
			}
			return false;
		});
	

	// Table
	if ($(".tableData").length > 0) {
		$('.tableData').each(function() {
			$(this).wrap('<div class="tableOut"></div>');
			$(this).find('tr').each(function() {
				$(this).find('td:first').addClass('firstTd');
				$(this).find('th:first').addClass('firstTh');
				$(this).find('th:last').addClass('lastTh');
			});
			$(this).find('tr:last').addClass('lastTr');
			$(this).find('tr:even').addClass('evenRow');
			$(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
		});
	};


	// Responsive Table
	if ($(".responsiveTable").length) {
		$(".responsiveTable").each(function() {
			$(this).find('td').removeAttr('width');
			var head_col_count = $(this).find('tr th').size();
			for (i = 0; i <= head_col_count; i++) {
				var head_col_label = $(this).find('tr th:nth-child(' + i + ')').text();
				$(this).find('tr td:nth-child(' + i + ')').attr("data-label", head_col_label);
			}
		});
	};

	// Table Scroll
	if ($(".tableScroll").length) {
		$(".tableScroll").each(function() {
			$(this).wrap('<div class="tableOut"></div>');
		});
	};
	
	// Datepicker
	$('.datepicker').datepicker( {
	dateFormat: 'dd/mm/yy',
	changeMonth: false,
	changeYear: false,
});

$('.timepicker').timepicker({timeFormat: 'HH:mm'});

$('.fileUpload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('.customUpload .browseFileName').text(filename);
});

	// Back to Top function
	if ($("#backtotop").length) {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 120) {
				$('#backtotop').fadeIn('250').css('display', 'block');
			} else {
				$('#backtotop').fadeOut('250');
			}
		});
		$('#backtotop').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, '200');
			return false;
		});
	};
	
	//Image gallery popup
	$('.popup-gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
            verticalFit: true,
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
              return element.find('img');
            }
          }
        });
		
		//youtube & vimeo popup
		$('.popup-youtube, .popup-vimeo').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
		
		//Zoom popup
		$('.popup-with-zoom').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });
		
		//Move popup
        $('.popup-with-move').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-slide-bottom'
        });

	// Get Focus Inputbox
	if ($(".getFocus").length) {
		$(".getFocus").each(function() {
			$(this).on("focus", function() {
				if ($(this).val() == $(this)[0].defaultValue) {
					$(this).val("");
				};
			}).on("blur", function() {
				if ($(this).val() == "") {
					$(this).val($(this)[0].defaultValue);
				};
			});
		});
	};

	// For device checking
	if (isMobile == false) {

	};

	// Litebox Popup
	if ($(".litebox").length) {
		$('.litebox').liteBox();
	};

	// Error Message
	setTimeout(function() {
		if ($(".fixedErrorMsg").length) {
			$(".fixedErrorMsg").slideDown("slow");
			setTimeout(function() {
				$('.fixedErrorMsg').slideUp();
			}, 5000);
		}
		if ($(".fixedSuccessMsg").length) {
			$(".fixedSuccessMsg").slideDown("slow");
			setTimeout(function() {
				$('.fixedSuccessMsg').slideUp();
			}, 5000);
		}
	}, 500);

	/*================= On Document Load and Resize Start =================*/
	$(window).on('resize', function() {

		ww = document.body.clientWidth;
		wh = document.body.clientHeight;

		$('.vCenter').each(function() {
			$(this).verticalAlign();
		});

		if ($("body").hasClass("mobilePort")) {
			$("body").removeClass("wob");
		}

	}).trigger('resize');
	/*================= On Document Load and Resize End =================*/

});
/*================= On Document Load End =================*/

/*================= On Window Resize Start =================*/
$(window).bind('resize orientationchange', function() {
	getWidth();
});

/*================= On Window Resize End =================*/

/*================= On Window Load Start =================*/
$(window).load(function() {

});
/*================= On Document Load End =================*/


function getWidth() {
	ww = document.body.clientWidth;
	if (ww > wideScreen) {
		$('body').removeClass('device').addClass('desktop widerDesktop');
	}
	if (ww > mobilePort && ww <= wideScreen) {
		$('body').removeClass('device widerDesktop').addClass('desktop');
	}
	if (ww <= mobilePort) {
		$('body').removeClass('desktop widerDesktop').addClass('device');
	}
	if (ww > 767 && ww < 1025) {
		$('body').addClass('ipad');
	} else {
		$('body').removeClass('ipad');
	}
	if (ww > 319 && ww < 768) {
		$('body').addClass('mobile');
	} else {
		$('body').removeClass('mobile');
	}
}

})(jQuery);


function validate() {
return false;
};


function menuMove() {
if ($(".mobileNav").length == 0) {
	var navigation = $('#nav').clone();
	$(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
	if ($(".mobileNav #navMob").length == 0) {
		$(".mobileNav #nav").attr("id", "navMob");
		$(".mobileNav").append("<span class='menuClose homeSprite'></span>");
		$(".mobileNav").append("<span class='navigationText'>Navigation</span>");
		//$(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
		$(".mobileNav .menuClose").click(function() {
			$("body").removeClass("activeMobNav");
		});
	}
}
}
