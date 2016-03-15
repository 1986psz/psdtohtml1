require('./../scss/main.scss');
require('./vendors/TweenMax.min.js');
require('./vendors/jquery.superscrollorama.js');
require('./vendors/bootstrap.min.js');

var helper = require('./project/helper.js');
var animations = require('./project/animations.js');
var hovers = require('./project/hovers.js');
var myModal = require('./project/myModal.js');

helper.generalInit(); 
myModal.modalInit();

if( ((window.innerWidth) > 999)&&(!(helper.isMobile())) ){
    //probably device not mobile- load advanced visual effects
    hovers.hoversInit();
    animations.animationsInit();
}

$(window).resize(function() {
    helper.refreshWindow();
});