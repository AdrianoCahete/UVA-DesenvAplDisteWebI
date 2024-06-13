document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("regForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      saveFormData();
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
  const marital = document.getElementById("marital");
  const interests = document.getElementById("interests");

  const today = new Date();
  const birthDate = new Date(birthday.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullName.value.length < 15) {
    alert("O nome completo deve ter no mínimo 15 caracteres.");
    fullName.focus();
    return false;
  }

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

  if (birthDate > today) {
    alert("A data de nascimento não pode ser no futuro.");
    birthday.focus();
    return false;
  }

  if (!gender) {
    alert("O sexo é obrigatório.");
    return false;
  }

  if (marital.value === "single") {
    const age = today.getFullYear() - birthDate.getFullYear();
    const mDiff = today.getMonth() - birthDate.getMonth();
    const dDiff = today.getDate() - birthDate.getDate();

    if (mDiff < 0 || (mDiff === 0 && dDiff < 0)) {
      age--;
    }

    if (age < 15) {
      alert("A idade deve ser maior que 15 anos para solteiros.");
      birthday.focus();
      return false;
    }
  }

  return true;
}

function saveFormData() {
  const formData = new FormData(document.getElementById("regForm"));
  let data = {};
  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  formData.forEach((value, key) => {
    if (data[key]) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });

  entries.push(data);
  localStorage.setItem("entries", JSON.stringify(entries));
}
