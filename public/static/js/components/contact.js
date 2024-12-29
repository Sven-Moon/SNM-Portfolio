const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;

export default function initializeContact() {
  const form = document.getElementById("contact__form");
  form.addEventListener("change", validateContactForm);
  addContactListeners()
}


function validateContactForm() {
  const errors = [];
  const form = document.getElementById("contact__form");

  // EMAIL
  if (!emailReg.test(form.email.value) && form.email.value.length > 0) {
    errors.push("Email is invalid");
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

function addContactListeners() {
  console.log('adding')
  let sendCopy = document.getElementById("sendCopy")
  sendCopy.addEventListener("change", updateCc)
  document.getElementById("email").addEventListener("keyup", updateCc)
}

function updateCc() {
  let sendCopy = document.getElementById("sendCopy")
  let ccEmail = document.getElementById("ccEmail")
  if (sendCopy.checked) {
    ccEmail.value = document.getElementById("email").value
    ccEmail.name = '_cc'
  } else {
    ccEmail.value = ""
    ccEmail.name = ''
  }
}

