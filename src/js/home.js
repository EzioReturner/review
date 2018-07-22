import "fullpage.js/dist/jquery.fullpage";
import "fullpage.js/dist/jquery.fullpage.css";

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true, // 是否显示项目导航
        navigationPosition: "right", // 项目导航的位置，可选 left 或 right
        navigationColor: '#fff',
        sectionsColor: ['#262431', '#262431', '#262431', '#262431', '#262431', '#2c2d39'],
        lazyLoading: true
    });
    $('#profilePhoto').bind('webkitAnimationEnd', function() {
        $(this).addClass('inPosition').unbind('webkitAnimationEnd');
    })
});