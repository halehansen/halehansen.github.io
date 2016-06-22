function init() {
    window.onscroll = function() {
        var clips = document.getElementsByClassName("clip");
        for (var i = 0; i < clips.length; i++) {
            var objectPosition = clips[i].getBoundingClientRect();
            var objectBottom = objectPosition.top;
            var windowBottom = (window.scrollY);

            if (windowBottom > objectBottom) {
                clips[i].className += " show";
            }
        }
    }
}

window.onload = init;
