$(function() {
    module.generalInit();
    module.modalInit();
    if( ((window.innerWidth) > 999)&&(!(module.isMobile())) ){
        //probably device not mobile- load advanced visual effects
        module.hoversInit();
        module.animationsInit();
    }
});
$(window).resize(function() {
    module.refreshWindow();
});