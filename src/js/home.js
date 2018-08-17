import "fullpage.js/dist/jquery.fullpage";
import "fullpage.js/dist/jquery.fullpage.css";

$(document).ready(function() {
    const images = document.querySelectorAll('.myImages');
    let index = 0;

    loadImg(images[0]);
    bindPageAction();
    const startTime = new Date();

    function loadImg(obj) {
        if (index < images.length) {
            const timer = setInterval(function() {
                if (obj.complete) {
                    clearInterval(timer);
                    loadImg(images[++index])
                }
            }, 80);
        } else {
            console.log('complete');
            const endTime = new Date();
            const minutesDiff = endTime.getMinutes() - startTime.getMinutes();
            if (minutesDiff === 0) {
                const secDiff = endTime.getSeconds() - startTime.getSeconds();
                if (secDiff < 4) {
                    setTimeout(() => {
                        startMyPage();
                    }, 2000);
                }
            } else {
                startMyPage();
            }

        }
    }
    // $('#oneBall').bind('webkitAnimationEnd', function() {

    // });
});


let bgMusic = '';

function startMyPage() {
    $('#fullpage').show();
    initFullPage();
    bgMusic = document.createElement('audio');
    bgMusic.setAttribute('preload', true);
    bgMusic.setAttribute('loop', 'loop');
    bgMusic.setAttribute('autoplay', 'autoplay');
    document.body.appendChild(bgMusic);
    $('#backImg').css('opacity', 1);
    $('#angleContainer').addClass('complete').bind('webkitAnimationEnd', function() {
        $('#musicBox').css('opacity', 1).toggleClass('play');
        bgMusic.src = 'http://music.163.com/song/media/outer/url?id=472137696.mp3';
        $(this).remove();
    });
    $('#photoContainer').addClass('pageLoaded');
    $('#profileInfo').addClass('pageLoaded')
}

function bindPageAction() {
    $('#photoContainer').bind('webkitAnimationEnd', function() {
        $(this).addClass('inPosition').unbind('webkitAnimationEnd');
    });
    $('#musicBox').click(function() {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
        $(this).toggleClass('play')
    });
    $('#infoKey').bind('webkitAnimationEnd', function() {
        // $.fn.fullpage.setAllowScrolling(true);
        $(this).unbind('webkitAnimationEnd');
    });
}

function initFullPage() {
    $('#fullpage').fullpage({
        navigation: true, // 是否显示项目导航
        navigationPosition: "left", // 项目导航的位置，可选 left 或 right
        navigationColor: '#fff',
        sectionsColor: ['#262431', '#262431', '#262431', '#262431', '#262431', '#2c2d39'],
        lazyLoading: true,
        afterLoad: function(anchor, index) {
            // if (index === 3) {
            //     $('#thirdCenter').addClass('showPyramid')
            // }
        },
        onLeave: function(index, nextIndex) {
            if (index === 1 && nextIndex === 2) {
                $('#splitPoint').removeClass('backOne goThird').addClass('start');
            }
            if (index === 2 && nextIndex === 1) {
                $('#splitPoint').removeClass('start goThird').addClass('backOne');
            }
            if (nextIndex === 3) {
                $('#thirdCenter').addClass('showPyramid');
            } else {
                $('#thirdCenter').removeClass('showPyramid');
            }
            if (index === 2 && nextIndex === 3) {
                $('#splitPoint').removeClass('start backOne').addClass('goThird');
            }
        }
    });
    // $.fn.fullpage.setAllowScrolling(false);
}
