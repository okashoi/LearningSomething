$(function() {
    $(".text1").hover(
        function() {$(this).css("color", "black");
                    $(this).css("background-color", "yellow")},
        function() {$(this).css("color", "white");
                    $(this).css("background-color", "black")}
    );
});
