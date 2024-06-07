document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("regForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      // Envia os dados
      alert("Dados enviados com sucesso!");
      form.reset();
    }
  });
});
