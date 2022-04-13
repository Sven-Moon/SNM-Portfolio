const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;

export default function activateFormVal() {
  const form = document.getElementById("contact__form");
  form.addEventListener("change", validateContactForm);
}

function validateContactForm() {
  const errors = [];
  const form = document.getElementById("contact__form");

  // EMAIL
  if (!emailReg.test(form.email.value) && form.email.value.length > 0) {
    errors.push("Email is invalid");
  }
  if (form.email.value === "") {
    errors.push("");
  }
  // MESSAGE
  // just long enough for "fuck you"
  if (form.message.value.length < 8 && form.message.value != "") {
    errors.push("Message is too short");
  }
  if (form.message.value === "") {
    errors.push("");
  }
  console.log(errors);
  renderErrors(errors);
}
function renderErrors(errors = []) {
  const submitButton = document.getElementById("contact__submit");

  if (errors.length > 0) {
    submitButton.disabled = true;
    const errorTemplate = `
      <ul>
        ${errors
          .map(
            (error) =>
              `
            <li>${error}</li>
          `
          )
          .join("")}
      </ul>
    `;
    document.getElementById("errors").innerHTML = errorTemplate;
  } else {
    submitButton.disabled = false;
    document.getElementById("errors").innerHTML = "";
  }
}
