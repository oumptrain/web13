//Вызов формы
let form = document.getElementById("form");
let btn = document.getElementsByClassName("contact__button")[0];
let btn1 = document.getElementsByClassName("contact__button")[1];
let close = document.getElementById("close");

btn.onclick = function() {
  history.pushState({
    page: 2
  }, "title 2", "?Form");
};
btn1.onclick = function() {
  history.pushState({
    page: 2
  }, "title 2", "?Form");
};
close.onclick = function() {
  history.pushState({
    page: 2
  }, "title 2", "?Home");
};

$(".contact__button").click(function() {
  if ($("#form").css("display") == "none") {
    $(".contact__button").css("background-color", "#e6e9ee");
    $(".contact__button").css("color", "#a7b0c1");
    $("#form").show("slow");
    $("#form").css("display", "flex");
  }
});

$("#close").click(function() {
  if ($("#form").css("display") == "flex") {
    $(".contact__button").css("background-color", "#24aa17");
    $(".contact__button").css("color", "#ffffff");
    $("#form").hide("slow");
    $("#form").css("display") == "none";
  }
});

//History API
addEventListener("popstate", function(e) {
  form.style.display = "none";
  btn.style.backgroundColor = "#24aa17";
  btn.style.color = "#ffffff";
  history.pushState({
    page: 1
  }, "title 1", "?Home");
}, true);

//LocalStorage
if (window.localStorage) {
  //Сохраняем данные input, textarea
  let elements = document.querySelectorAll("[name]");
  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute("name");
      element.value = localStorage.getItem(name) || "";
      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}