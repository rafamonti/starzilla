$(function () {
    slider();
    slider2();
});

// ---------- slider gallery ---------- // 

function slider() {
    var size = $("#carousel > div").length; //number of items in carousel
            var position = 0; // current position of carousal
            var changeInterval = 1000; // interval between change of slides

            $("#carousel > div").not(".show").fadeOut(); //fadeout all items except the one with .show

            //on right clicking the carousal
            $("#carousel > #right").click(function () {
                run(1);
            });

            //on left button click of the carousal
            $("#carousel > #left").click(function () {
                run(0);
            });


            //moves the slider back or forth based on x (1 = forward 0 = backward)
            function run(x) {
                position = $("#carousel").find(".show").index();
                if (x == 1)
                    ++position;
                else
                    --position;
                checker();
                changeCarousal(); //function call that actually changes slides
            }


            //just a function to reposition the slider when out of bounds
            function checker() {
                if (position >= size) {
                    position = 0;
                }
                else if (position < 0) {
                    position = size - 1;
                }
                //console.log(position);
            };


            //this changes the image and button selection
            function changeCarousal() {
                $("#carousel").find(".show").removeClass("show").fadeOut();
                $("#carousel > div").eq(position).fadeIn(changeInterval).addClass("show");
                $("#carousel > ul").find(".showli").removeClass("showli");
                $("#carousel > ul > li").eq(position).addClass("showli");
            }

            //when use clicks slider button
            $("#carousel > ul > li").click(function () {
                position = $(this).index();
                var temp = $("#carousel").find(".show").index();
                if (position != temp) {
                    changeCarousal();
                }
            });
        }

        // ---------- slider team ---------- //
        function slider2() {
            var size = $("#carousel2 > div").length; //number of items in carousel
            var position = 0; // current position of carousal
            var sliderIntervalID; // used to clear autoplay
            var sliderInterval = 5000; // interval of autoplay
            var changeInterval = 1000; // interval between change of slides

            $("#carousel2 > div").not(".show").fadeOut(); //fadeout all items except the one with .show

            //on right clicking the carousal
            $("#carousel2 > #right").click(function () {
                run(1);
            });


            //on left button click of the carousal
            $("#carousel2 > #left").click(function () {
                run(0);
            });


            //moves the slider back or forth based on x (1 = forward 0 = backward)
            function run(x) {
                position = $("#carousel2").find(".show").index();
                if (x == 1)
                    ++position;
                else
                    --position;
                checker();
                changeCarousal(); //function call that actually changes slides
            }


            //just a function to reposition the slider when out of bounds
            function checker() {
                if (position >= size) {
                    position = 0;
                }
                else if (position < 0) {
                    position = size - 1;
                }
                //console.log(position);
            };


            //this changes the image and button selection
            function changeCarousal() {
                $("#carousel2").find(".show").removeClass("show").fadeOut();
                $("#carousel2 > div").eq(position).fadeIn(changeInterval).addClass("show");
                $("#carousel2 > ul").find(".showli").removeClass("showli");
                $("#carousel2 > ul > li").eq(position).addClass("showli");
            }

            //when use clicks slider button
            $("#carousel2 > ul > li").click(function () {
                position = $(this).index();
                var temp = $("#carousel2").find(".show").index();
                if (position != temp) {
                    changeCarousal();
                }
            });
        }
