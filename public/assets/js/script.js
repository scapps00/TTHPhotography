$(".x").click(function() {
    $("#whiteout").css("display", "none");
    $("#modal").css("display", "none");
    $("#modal2").css("display", "none");
    $("#modal3").css("display", "none");
    $("#modal4").css("display", "none");
});

$("#whiteout").click(function() {
    $("#whiteout").css("display", "none");
    $("#modal").css("display", "none");
    $("#modal2").css("display", "none");
    $("#modal3").css("display", "none");
    $("#modal4").css("display", "none");
});

$(".photo").click(function() {
    $("#whiteout").css("display", "inline");
    $("#modal").css("display", "inline");
    window.scrollTo(0, 0);
});

$(".photo2").click(function() {
    $("#whiteout").css("display", "inline");
    $("#modal2").css("display", "inline");
    window.scrollTo(0, 0);
});

$(".photo3").click(function() {
    $("#whiteout").css("display", "inline");
    $("#modal3").css("display", "inline");
    window.scrollTo(0, 0);
});

$(".photo4").click(function() {
    $("#whiteout").css("display", "inline");
    $("#modal4").css("display", "inline");
    window.scrollTo(0, 0);
});