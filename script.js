document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for validation

  let form = new FormData(event.target);
  let data = {};

  form.forEach((value, key) => {
    if (data[key]) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });

  console.log("Form Data:", data);
  alert("Form enviado!");
});
