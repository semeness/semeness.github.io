import {Slider} from '../common/js/Slider/index';

$(() => {
    var slider = new Slider({
        left: '.slider__arrow_left',
        right: '.slider__arrow',
        slider: '.slider',
        sliderItem: '.slider__item',
    });

    $(".slider__arrow").on("click", function(){
        console.log("DICKSUCKER");
        $(this).closest("slider__arrow-wrapper");
    });
});