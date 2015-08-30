var module = (function (pub) {	
	
        var hoverMenu = function(){
            $( 'header nav a' ).mouseover(function() {
                 TweenMax.fromTo(this, 1, {
                    css: {
                        opacity:0
                    },
                    immediateRender: true
                }, {
                    css: {
                        opacity:1
                    }
                });
            });
        };
        var applyHoverStartValues = function(){
            $( '#gallery .imgCover' ).css("background-color","rgba(224, 183, 181,0.5)");
            $( '#gallery .imgCover .imgLabel' ).css("transform","scale(0)");
            $( '#gallery .imgCover .imgZoomIcon' ).css("transform","scale(0)");
        };
        var hoverGallery = function(){
            var imageMouseOverAnimations = function(){
                $( '#gallery .imgCover' ).mouseover(function() {
                    TweenMax.fromTo(this, 0, {
                        css: {
                            backgroundColor: 'rgba(224, 183, 181,0.5)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            backgroundColor: 'rgba(224, 183, 181,0)'
                        }
                    });
                    TweenMax.fromTo($(this).find('.imgLabel'), 1, {
                        css: {
                            transform:'scale(0)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            transform:'scale(1)'
                        }
                    });
                    TweenMax.fromTo($(this).find('.imgZoomIcon'), 1, {
                        css: {
                            transform:'scale(0)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            transform:'scale(1)'
                        }
                    });
                });
            };
            var imageMouseLeaveAnimations = function(){
                $( '#gallery .imgCover' ).mouseleave(function() {
                    TweenMax.fromTo(this, 1, {
                        css: {
                            backgroundColor: 'rgba(224, 183, 181,0)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            backgroundColor: 'rgba(224, 183, 181,0.5)'
                        }
                    });
                    TweenMax.fromTo($(this).find('.imgLabel'), 1, {
                        css: {
                            transform:'scale(1)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            transform:'scale(0)'
                        }
                    });
                    TweenMax.fromTo($(this).find('.imgZoomIcon'), 1, {
                        css: {
                            transform:'scale(1)'
                        },
                        immediateRender: true
                    }, {
                        css: {
                            transform:'scale(0)'
                        }
                    });

                });
            };
            
            applyHoverStartValues();
            imageMouseOverAnimations();
            imageMouseLeaveAnimations();
        };
        
	pub.hoversInit = function() {
            hoverMenu();
            hoverGallery();
	};
	
	return pub;
})(module || {});