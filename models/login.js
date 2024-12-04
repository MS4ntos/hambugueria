function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}


function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
      return "Usuário nao encontrado";
  }
  return error.message;
}

function register() {
  window.location.href = "../login.html";
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  
  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPasswordButton().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
      return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),

  remail: () => document.getElementById("remail"),
  rpassword: () => document.getElementById("rpassword"),

} 

function register() {
  const email = form.remail().value;
  const password = form.rpassword().value;

  console.log("Tentando registrar com email:", email);
  console.log("Senha:", password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log("Registro bem-sucedido:", response);
      Swal.fire({
        icon: 'success',
        title: 'Registro bem-sucedido',
        text: 'Você foi registrado com sucesso!',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.href = "index.html";
      });
    })
    .catch(error => {
      console.error("Falha no registro:", error);
      Swal.fire({
        icon: 'error',
        title: 'Falha no registro',
        text: getErrorMessage(error),
        confirmButtonText: 'OK'
      });
    });
}

function getErrorMessage(error) {
  switch (error.code) {
    case "auth/user-not-found":
      return "Usuário não encontrado";
    case "auth/invalid-credential":
      return "Senha ou email incorretos";
    case "auth/email-already-in-use":
      return "O email já está em uso";
    case "auth/weak-password":
      return "A senha é muito fraca";
    default:
      return error.message;
  }
}

function getErrorMessage(error) {
  switch (error.code) {
    case "auth/user-not-found":
      return "Usuário não encontrado";
    case "auth/invalid-credential":
      return "Senha ou email incorretos";
    default:
      return error.message;
  }
}
function logar() {
  const email = form.email().value;
  const password = form.password().value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido',
        text: 'Você entrou com sucesso!',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.href = "index.html";
      });
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Falha no login',
        text: getErrorMessage(error),
        confirmButtonText: 'OK'
      });
    });
}
function validateEmail(email) {
  return /\S+@\S+.\S+/.test(email);
}