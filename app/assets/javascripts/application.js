// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require jquery3
//= require jquery_ujs



/*$(document).ready(function(){
    $('#presentation').mouseenter(function(){
        alert("MouseEnter!"); // This will create an alert box
        $('#presentation').css('background','red');
        console.log("MouseEnter!"); // This will log to the JS console on your browser which is a bit nicer to read than alerts, you do not need both, just preference
        $(this).fadeIn('fast',1);
    });
    $('#presentation').mouseleave(function(){
        alert("MouseLeave!"); // This will create an alert box
        console.log("MouseLeave!");
        $(this).fadeIn('fast',0.5);
    });
});*/

$(document).ready(function(){
	$("#presentation").click(function(){
		$("#text1").fadeToggle();
		$("#text2").hide();
		$("#text3").hide();
	});
}); 

$(document).ready(function(){
	$("#menu").click(function(){
		$("#text1").hide();
		$("#text2").fadeToggle();
		$("#text3").hide();
	});
}); 

$(document).ready(function(){
	$("#contact").click(function(){
		$("#text1").hide();
		$("#text2").hide();
		$("#text3").fadeToggle();
	});
}); 
