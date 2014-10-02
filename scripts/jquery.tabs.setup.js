$(function() {
	$('#featured_wrap').tabs({
		fx: {
			opacity: 'show'
		}
	}).tabs('rotate', 8000);
	
	$( ".menu" ).mouseover(function() {
	    $( this ).addClass("active");
	});
	
	$( ".menu" ).mouseleave(function() {
	    $( this ).removeClass("active");
	});
	

});