document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let form = new FormData(e.target);
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
