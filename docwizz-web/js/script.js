var $j = jQuery.noConflict();




$j(document).ready(function($j) {
	
	
	//todo put into init
	var displayhalf = 1*$j(window).height()/2;
	var trigger0 = 1*displayhalf+20;
	
	//Set Trigger Positions
	$j("#trigger0").css({ top: trigger0 });
	$j("#placeholder0").css({ height: trigger0 });

	
	var docTrigger = 0;
	var docCtrl = new ScrollMagic();
	var arrowCtrl = new ScrollMagic({
	    globalSceneOptions: {
	        triggerHook: "onLeave"
	    }
	});	
	
	
	
	//Scene0 Part 1 - Pin #titlechart for half height of screen
	var scene0_pin1 = new ScrollScene({triggerElement: "body", duration: displayhalf+20, offset: 0})
			.setPin("#titlechart")
			.triggerHook("onLeave")
			.addTo(docCtrl);
	
	
	
	//Scene0 Part 2 - Pin #scroll-doc
	/*var tween0_pin2 = TweenMax.to("#scroll-doc", 1, {border: "0"});
	var scene0_pin2 = new ScrollScene({triggerElement: "#trigger0", duration: 1, offset: 0})
			.setTween(tween0_pin2)
			.triggerHook("onCenter")
			.addTo(docCtrl);*/
		
	//Scene0 Part 3 - Scroll #scroll-doc-img to the right and pin
	var tween0_d = TweenMax.to("#scroll-doc-img", 1, {right: "-30"});
	var scene0_d = new ScrollScene({triggerElement: "#trigger0", duration: displayhalf, offset: 0})
			.setTween(tween0_d)
			.on("leave", pinScroller)
			.triggerHook("onCenter")
			.addTo(docCtrl);

	//Scene0 Part 4 - Switch #scroll-doc-img background
	var tween0_d1 = TweenMax.to("#scroll-doc-img", 1, {right: "-30"});
	var scene0_d1 = new ScrollScene({triggerElement: "#scene1", duration: 1, offset: 300})
			.setTween(tween0_d1)
			.on("leave", changeDocImg)
			.triggerHook("onCenter")
			.addTo(docCtrl);

	
	function pinScroller(e) {
		$j("#scroll-doc").toggleClass('pinned');
	}
	
	function changeDocImg(e) {
		//Change background-image to doc2.png on #scroll-doc-img
		if (docTrigger == 0) {
			$j("#scroll-doc-img").addClass('full').removeClass('empty');
			docTrigger = 1;
		} else {
			$j("#scroll-doc-img").addClass('empty').removeClass('full');
			docTrigger = 0;
		}
	}
	
	// show indicators (requires debug extension)
	scene0_pin1.addIndicators();
	//scene0_pin2.addIndicators();
	scene0_d.addIndicators();
	scene0_d1.addIndicators();

});




function centerTitle() {
	//Depricated
	var nMargin = $j(window).height()/-2;
	//$j("#titledescription").style["margin-top"] = "'"+height/2+"'";
	$j("#titledescription").css( "margin-top", function( nMargin ) {
		return nMargin;
		});
	//console.log("set margin "+nMargin);
}