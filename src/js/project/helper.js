var exports = module.exports = {};
//navigation- animate smoothly to section
var smoothNavigationScroll = function(){
    $("header nav a,#headerBtn,#galleryBtn").click(function (evt){
        evt.preventDefault();
        var signHash = this.hash.substr(1);
        $('html,body').animate({
            scrollTop: $("#"+ signHash).offset().top + 70
        }, 500);
    });
};
//check if device is mobile
exports.isMobile = function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        return true;
    }
    else{
        return false;
    }
};
//wait for user to end some action- used by refresh window
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
//waits 0,5s AFTER window is resized and then refresh
exports.refreshWindow = function(){
    delay(function(){
        location.reload();
    }, 500);
};

exports.generalInit = function() {
        smoothNavigationScroll();
};


