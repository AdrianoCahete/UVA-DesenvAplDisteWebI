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

function validateForm() {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const birthday = document.getElementById("birthDate");
  const gender = document.querySelector('input[name="gender"]:checked');

  if (fullName.value.length < 15) {
    alert("O nome completo deve ter no mínimo 15 caracteres.");
    fullName.focus();
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email.value.length < 10 || !emailRegex.test(email.value)) {
    alert("O email deve ter pelo menos 10 caracteres e ser válido.");
    email.focus();
    return false;
  }

  if (!birthday.value) {
    alert("A data de nascimento é obrigatória.");
    birthday.focus();
    return false;
  }

  if (!gender) {
    alert("O sexo é obrigatório.");
    return false;
  }

  return true;
}
