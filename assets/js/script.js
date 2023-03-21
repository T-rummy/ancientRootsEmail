    function reverseVideo() {
        var video = document.querySelector("#video-background video");
        video.pause();
        var intervalID = setInterval(function () {
            if (video.currentTime <= 0) {
                clearInterval(intervalID);
                video.play();
            } else {
                video.currentTime -= 0.05;
            }
        }, 50);
    }
    reverseVideo();