async function asd(url) {
  let x = document.getElementById("close");
  const baseUrl = "https://formcarry.com/";
  const response = await fetch(baseUrl + url);
  const data = response;
  if (response.ok) {
    x.removeAttribute("disabled");
  }
  if (!response.ok) {
    alert("Обновите страницу!");
  }
  return data;
}

asd("vlad.sinencko@ya.ru").then(console.log).catch(error =>
  alert("Отправьте форму еще раз"));

function call() {
  var msg = $("#form").serialize();
  document.getElementById("close").disabled = true;
  $.ajax({
    type: "POST",
    url: "https://formcarry.com/vlad.sinencko@ya.ru",
    data: msg,
    success: function(data) {
      alert("Форма отправлена успешно");
      document.getElementById("inputName").value = "";
      document.getElementById("inputPhone").value = "";
      document.getElementById("message").value = "";
    },
    error: function(xhr, str) {
      alert("Возникла ошибка: " + xhr.responseCode);
    }
  });
}