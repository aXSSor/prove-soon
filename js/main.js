var page1 = $(".page1");
var page2 = $(".page2");
$(document).ready(function(){
    $('.btn-soon-text').click(function(){
        page1.addClass("animated bounceOut");
        setTimeout(function(){
            window.location.replace("./progress.html");
        }, 1000);
    });
});


