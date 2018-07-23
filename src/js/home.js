import "fullpage.js/dist/jquery.fullpage";
import "fullpage.js/dist/jquery.fullpage.css";

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true, // 是否显示项目导航
        navigationPosition: "left", // 项目导航的位置，可选 left 或 right
        navigationColor: '#fff',
        sectionsColor: ['#262431', '#262431', '#262431', '#262431', '#262431', '#2c2d39'],
        lazyLoading: true,
        afterLoad: function(anchor, index) {

        },
        onLeave: function(index,nextIndex) {
            if (index === 1 && nextIndex === 2) {
                $('#splitPoint').removeClass('backOne').addClass('start');
            }
            if (index === 2 && nextIndex === 1) {
                $('#splitPoint').removeClass('start').addClass('backOne');
            }
        }
    });
    $('#profilePhoto').bind('webkitAnimationEnd', function() {
        $(this).addClass('inPosition').unbind('webkitAnimationEnd');
    });
});
