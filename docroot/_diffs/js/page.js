$(function(){
	// pjax
	$(document).on('click', 'a', function(event) {
		var container = $("#pjaxWrapper");
		$.pjax.click(event, container, {timeout: 30000});
	})

	// log
	$(document).on('pjax:send', function(e) {
		//console.log("send, %o", e);
		preloader.show();
	});
	$(document).on('pjax:complete', function(e) {
		//console.log("complete, %o", e);
		preloader.hide();
	});
	
	$(document).on('pjax:timeout', function(event) {
	  // Prevent default timeout redirection behavior
	  //console.log("PJAX TIMEOUT");
	  event.preventDefault()
	})

	function PRELOADER(overloaderId, pjaxPreloaderIconId){
		this.init(overloaderId, pjaxPreloaderIconId);
	};
	PRELOADER.prototype = {
		overloaderId: "",
		pjaxPreloaderIconId: "",
		overloaderId: null,
		pjaxPreloaderIconId: null,
		init: function(overloaderId, pjaxPreloaderIconId){
			var instance = this;
			instance.overloader = $(overloaderId);
			instance.pjaxPreloaderIcon = $(pjaxPreloaderIconId);
			instance.hide();
		},
		show: function(){
			var instance = this;
			if (instance.overloader)
				instance.overloader.show();
			if (instance.pjaxPreloaderIcon)
				instance.pjaxPreloaderIcon.show();
		},
		hide: function(){
			var instance = this;
			if (instance.overloader)
				instance.overloader.hide();
			if (instance.pjaxPreloaderIcon)
				instance.pjaxPreloaderIcon.hide();
		}
	};
	var preloader = new PRELOADER("#overloader", "#pjaxPreloaderIcon");
	
});
