var $j = jQuery.noConflict();




$j(document).ready(function($j) {
	
	
	//todo put into init
	var displayheight = 1*$j(window).height();
	var displayhalf = displayheight/2;
	var trigger0 = 1*displayhalf+20;
	
	//Set Trigger Positions
	$j("#trigger0").css({ top: trigger0 });
	$j("#placeholder0").css({ height: trigger0 });

	//Set height for scenes
	$j(".display").css({ height: displayheight });
	$j(".scene").css({ height: displayheight });
	
	var docTrigger = 0;
	var docCtrl = new ScrollMagic();
	var contentCtrl = new ScrollMagic({
	    globalSceneOptions: {
	        triggerHook: "onLeave"
	    }
	});	
	
	
	
	//Scene0 Part 0 - Pin #titlechart for half height of screen
	var scene0_pin = new ScrollScene({triggerElement: "body", duration: displayhalf, offset: 0})
			.setPin("#titlechart")
			.triggerHook("onLeave")
			.addTo(docCtrl);
	
	
	
	/*//Scene0 Part 1 - Pin #scroll-doc
	var scene0_pin2 = new ScrollScene({triggerElement: "#trigger0", duration: 1, offset: 0})
			.setTween(TweenMax.to("#scroll-doc", 1, {border: "0"}))
			.triggerHook("onCenter")
			.addTo(docCtrl);*/
		
	//Scene0 Part 1 - Scroll #scroll-doc-img to the right and pin
	var scene0_d = new ScrollScene({triggerElement: "#trigger0", duration: displayhalf, offset: 0})
			.setTween(TweenMax.to("#scroll-doc-img", 1, {right: 5}))
			.on("leave", pinScroller)
			.triggerHook("onCenter")
			.addTo(docCtrl);


	//Scene1 Part 0 - Pin #scene1 for half height of screen
	var scene1_pin = new ScrollScene({triggerElement: "#scene1", duration: 800, offset: 0})
			.setPin("#scene1")
			.triggerHook("onLeave")
			.addTo(docCtrl);
	
	//Scene1 Part 1a - slide in Textblock1
	var scene1_t = new ScrollScene({triggerElement: "#trigger1", duration: 200, offset: 100})
			.setTween(TweenMax.from("#letter-textblock1", 1, {left: -1000, ease: Back.easeOut}))
			.triggerHook("onCenter")
			.addTo(docCtrl);
	//Scene1 Part 1b - slide in Textblock2
	var scene1_t2 = new ScrollScene({triggerElement: "#trigger1", duration: 200, offset: 200})
			.setTween(TweenMax.from("#letter-textblock2", 1, {left: -1000, ease: Back.easeOut}))
			.triggerHook("onCenter")
			.addTo(docCtrl);
	//Scene1 Part 2 - Kick out letter
	var scene1_l = new ScrollScene({triggerElement: "#trigger1", duration: 250, offset: 500})
			.setTween(TweenMax.to("#letter-screen", 1, {left: 1600, scale: 0.5}))
			.triggerHook("onCenter")
			.addTo(docCtrl);
	//Scene1 Part3 - Kick in Explanation Text
	var scene1_e = new ScrollScene({triggerElement: "#trigger1", duration: 250, offset: 450})
			.setTween(TweenMax.from("#letter-explain", 1, {left: -1000}))
			.triggerHook("onCenter")
			.addTo(docCtrl);
	
	//Scene1 Part 4 - Switch #scroll-doc-img background
	var scene1_d = new ScrollScene({triggerElement: "#trigger1", duration: 1, offset: 580})
			.setTween(TweenMax.to("#scroll-doc-img", 1, {right: "5"}))
			.on("leave", changeDocImg)
			.triggerHook("onCenter")
			.addTo(docCtrl);

	
	function pinScroller(e) {
		if ($j("#scroll-doc").offset().top < displayhalf) {
			$j("#scroll-doc").removeClass('pinned');
		} else {
			if (!$j("#scroll-doc").hasClass('pinned')) {
				$j("#scroll-doc").addClass('pinned');
			}
		}
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
	scene0_pin.addIndicators();
	//scene0_pin2.addIndicators();
	scene0_d.addIndicators();
	scene1_pin.addIndicators();
	scene1_t.addIndicators();
	scene1_t2.addIndicators();
	scene1_l.addIndicators();
	scene1_e.addIndicators();
	scene1_d.addIndicators();

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