newFunction();

function newFunction() {
  $("#gamburger").click(function() {
    if ($("#1").css("display") == "none") {
      $("#1").show(200);
    } else {
      $("#1").hide(200);
    }
  });
  $("#menu").click(function() {
    if ($("#2").css("display") == "none") {
      $("#2").show(200);
    } else {
      $("#2").hide(200);
    }
  });
}