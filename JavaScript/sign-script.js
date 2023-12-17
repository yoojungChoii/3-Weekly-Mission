// const emailInput = document.getElementsByClassName('email')[0];
// const errorMessage = document.getElementsByClassName('error-message')[0];
const emailInput = document.querySelectorAll('.email')[0];
const passInput = document.querySelectorAll('.password')[0];
const passConfirmInput = document.querySelectorAll('.password-confirm')[0];
const errorMail = document.querySelectorAll('.error-mail')[0];
const errorPass = document.querySelectorAll('.error-pass')[0];
const errorPassConfirm = document.querySelectorAll('.error-passconfirm')[0];
const eyeImagePass = document.querySelector('#eyeImagePass'); 
const eyeImageConfirm = document.querySelector('#eyeImageConfirm'); 
const pattern = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
let link = '/folder';

function checkEmail(emailType) {
  if (emailInput.value === '') {
    errorMail.textContent = '이메일을 입력해주세요.';
  } else if (!pattern.test(emailType)) {
    errorMail.textContent = '올바른 이메일 주소가 아닙니다.'
  } else if (emailInput.value !== '') {
    errorMail.textContent = '이메일을 확인해주세요.';
  } else if (emailInput.value === 'test@codeit.com' && passInput.value === 'codeit101') {
    location.href = link;
  } else {
    errorMail.textContent = '';
  }
}

function checkPass() {
  if (passInput.value === '') {
    errorPass.textContent = '비밀번호를 입력해주세요.';
  } else if (passInput.value !== '') {
    errorPass.textContent = '비밀번호를 확인해주세요.'
  } else {
    errorPass.textContent = '';
  }
}

function checkPassConfirm() {
  if (passConfirmInput.value === '') {
    errorPassConfirm.textContent = '비밀번호를 다시 입력해주세요.';
  } else if (passConfirmInput.value !== passInput.value) {
    errorPassConfirm.textContent = '비밀번호가 일치하지 않습니다.';
  } else {
    errorPassConfirm.textContent = '';
  }
}


function togglePasswordVisibility() {
  const currentType = passInput.type;
  passInput.type = (currentType === 'password') ? 'text' : 'password';
  eyeImagePass.src = (currentType === 'password') ? 'img/eye-cross.png' : 'img/eye.png';
}

function togglePasswordVisibilityConfirm() {
  const currentType = passConfirmInput.type;
  passConfirmInput.type = (currentType === 'password') ? 'text' : 'password';
  eyeImageConfirm.src = (currentType === 'password') ? 'img/eye-cross.png' : 'img/eye.png';
}


emailInput.addEventListener('focusout', checkEmail);
passInput.addEventListener('focusout', checkPass);
passConfirmInput.addEventListener('focusout', checkPassConfirm);
eyeImagePass.addEventListener('click', togglePasswordVisibility);
eyeImageConfirm.addEventListener('click', togglePasswordVisibilityConfirm);

