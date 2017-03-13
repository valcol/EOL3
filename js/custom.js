

(function($) {
    
    "use strict";


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h2").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '60px'
        }
    );
    
    $("h3").fitText(
        1.2, {
            minFontSize: '29px',
            maxFontSize: '48px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });
    
   $(".buttonshowsynonyms").click(function(){
        $(".synonyms").slideToggle();
       console.log("buttton");
   });
    


})(jQuery); 

video_count =1;
videoPlayer = document.getElementById("sv");

function switchVideo(){
    if (video_count == 1){
        var nextVideo = "video/anim_b.webm";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
        video_count = 2;
    } else
    {
        var nextVideo = "video/anim_w.webm";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
        video_count = 1;
    }
};