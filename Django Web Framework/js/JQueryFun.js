       
  
function runJQ(){
  
  $(function() {
    $( "#accordion" ).accordion();
    console.log("Code Ran");

  });

$(function(){
  $(".btn1").click(function(){
    $("li").slideUp();
  });
  $(".btn2").click(function(){
    $("li").slideDown();
  });
});

var current_h = null;
var current_w = null;

$(function(){
	$('.pic').hover(
    	function(){
        	current_h = $(this, 'img')[0].height;
        	current_w = $(this, 'img')[0].width;
        	$(this).stop(true, false).animate({width: (current_w * 1.3), height: (current_h * 1.3)}, 300);
    	},
    	function(){
        	$(this).stop(true, false).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
    	}
	);
});

  }








//   I want to you modify your web pages you have been working on this semester to include the following:
// - call to Google CDN for JQuery X
// - implement a Selection call by element X
// - implement a Selection call by class X
// - implement a Selection call by ID X
// - implement a Manipulation call 
// - implement an Event call
// - implement a JQuery UI call (Widget, interactions, effect, and/or utilities)
// - Accordion, menu, and tabs are recommended X
 
// Make sure that whatever you implement still looks professional