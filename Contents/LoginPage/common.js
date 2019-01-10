
var leftSide = $(".side-section").find(".grad-bg"),
	rightSide = $(".right-section");
	windowH = $(window).height();

	leftSide.css({"min-height": windowH})
	rightSide.css({"min-height": windowH});

$(window).on("resize", function(){
	windowH = $(window).height();

	leftSide.css({"min-height": windowH})
	rightSide.css({"min-height": windowH});
})