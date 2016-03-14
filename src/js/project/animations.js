var exports = module.exports = {};

var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true
});

var animateHeader = function (){

    var animateParallaxBackground = function(){
        controller.addTween(
            0,
            (new TimelineLite()).append([
                TweenMax.fromTo($('header'), 1, {
                    css: {
                        backgroundPosition:'center 0'
                    },
                    immediateRender: true
                }, {
                    css: {
                        backgroundPosition:'center 200px'
                    }
                })
            ])
            , 1000 // scroll duration of tween
            , 0 //offset of trigger point (without that its 0)
            ,false
        );
    };
    var animateTitles = function(){
        controller.addTween(
            0,
            (new TimelineLite()).append([
                TweenMax.fromTo($('header h1'), 1, {
                    css: {
                        opacity:1
                    },
                    immediateRender: true
                }, {
                    css: {
                        opacity:0
                    }
                }),
                TweenMax.fromTo($('header h3'), 1, {
                    css: {
                        opacity:1
                    },
                    immediateRender: true
                }, {
                    css: {
                        opacity:0
                    }
                })
            ])
            , 300 // scroll duration of tween
            , 0 //offset of trigger point (without that its 0)
            ,false
        );
    };

    animateParallaxBackground();
    animateTitles();
};

var animateFooter = function(){

    controller.addTween(
        ( ( ($(document).height())-($(window).height()) ) -50 ),/*start 50px before page end*/
        (new TimelineLite())
            .append([
                TweenMax.fromTo($('footer #footerImg1'), 0.5, {
                    css: {
                        transform:'rotateY(180deg)'
                    },
                    immediateRender: true
                }, {
                    css: {
                        transform:'rotateY(360deg)'
                    }
                })])
            .append([
                TweenMax.fromTo($('footer #footerImg2'), 0.5, {
                    css: {
                        transform:'rotateY(180deg)'
                    },
                    immediateRender: true
                }, {
                    css: {
                         transform:'rotateY(360deg)'
                    }
                })])
            .append([
                TweenMax.fromTo($('footer #footerImg3'), 0.5, {
                    css: {
                        transform:'rotateY(180deg)'
                    },
                    immediateRender: true
                }, {
                    css: {
                         transform:'rotateY(360deg)'
                    }
                })])
        , 0 // scroll duration of tween
        , 0 //offset of trigger point (without that its 0)
        ,false
    );

};

var animateContact = function(){
    controller.addTween(
        '#contact',//here starts animations of inputs 
        (new TimelineLite()).append([
            TweenMax.fromTo($('#contact #leftInputWrapper'), 1, {
                css: {
                    transform:'scale(0)',
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    transform:'scale(1)',
                    opacity:1
                }
            }),
            TweenMax.fromTo($('#contact #rightInputWrapper'), 1, {
                css: {
                    transform:'scale(0)',
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    transform:'scale(1)',
                    opacity:1
                }
            }),
            TweenMax.fromTo($('#contact textarea'), 1, {
                css: {
                    transform:'scale(0)',
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    transform:'scale(1)',
                    opacity:1
                }
            })
        ])
        , 0 // scroll duration of tween
        , -300 //offset of trigger point (#contact-300px)
        ,false
    );
};

var animateIntro = function(){

    controller.addTween(
        '#intro',
        //0,
        (new TimelineLite()).append([
            TweenMax.fromTo($('#intro .column1'), 1, {
                css: {
                    top: 200,
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    top: 0,
                    opacity:1
                }
            }),
            TweenMax.fromTo($('#intro .column2'), 1, {
                css: {
                    top: 300,
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    top: 0,
                    opacity:1
                }
            }),
            TweenMax.fromTo($('#intro .column3'), 1, {
                css: {
                    top: 400,
                    opacity:0
                },
                immediateRender: true
            }, {
                css: {
                    top: 0,
                    opacity:1
                }
            })
        ])
        , 0 // scroll duration of tween
        , 0 //offset of trigger point (without that its 0)
        ,false
    );

};

exports.animationsInit = function() {
        animateHeader();
        animateIntro();
        animateContact();
        animateFooter();
};
	
