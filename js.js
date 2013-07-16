$(function () {

    var myScroll;
    var posX = -60000;
    var linearEasing = { style: 'linear', fn: function (k) {
        return k;
    } };


    myScroll = new IScroll('#wrapper', {
        // eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        bounce: false,
        startX: posX
    });


    // scroll from side to side not leaving left and right borders
    function scrollPanorama() {
        var stepX = 0;
        var curPosX = myScroll.getComputedPosition().x;
        if (curPosX === posX) {
            if (curPosX > -30000) {
                stepX = -10000;
            } else if (curPosX < -90000) {
                stepX = 10000;
            } else {
                stepX = -10000;
            }
            myScroll.scrollBy(stepX, 0, 100000, linearEasing);
        }
        posX = curPosX;
        setTimeout(scrollPanorama, 5000);
    }

    scrollPanorama();


    /*-точки---------------------------------------*/
    var $block = $('#map_canvas');
    var $points = $('.map-canvas__point',$block);
    var $pano = $('#pano');

    $points.on('click',function(e){
        $points.removeClass('map-canvas__point_active');
        var panoName = $(this).addClass('map-canvas__point_active').data('map');
        $pano[0].className = 'pano ' + panoName;
    });

    /*---------------------------------------*/

    $block = $('.b-navigation');
    $control = $('.b-navigation__control');

    $control.click(function (e) {
        if ($block.hasClass('b-navigation_state_hide')) {
            $block.animate({'right': "-0px"}, 300).removeClass('b-navigation_state_hide');
            $control.find('span').hide();
        } else {
            $block.animate({'right': "-340px"}, 300).addClass('b-navigation_state_hide');
            $control.find('span').show();
        }
    });

});