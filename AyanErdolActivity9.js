$(document).ready(function(){
    $("#image_list a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    
    $("#image_list a").click(function(evt){
        evt.preventDefault();

        var clickedLink = $(this);

        $("#image, #caption").fadeOut(1000, function(){
            var imageURL = clickedLink.attr("href");
            $("#image").attr("src", imageURL);
            var caption = clickedLink.attr("title");
            $("#caption").text(caption);
            
            $("#image, #caption").fadeIn(1000);
        });
    });

    $("li:first-child a").focus();
});