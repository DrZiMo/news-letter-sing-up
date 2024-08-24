const email = document.getElementById("email");
const subscribe = document.getElementById("subs");
const errMsg = document.querySelector(".error-msg");
const msgContainer = document.querySelector(".message");
const mainImg = document.getElementById('main-image');

const inValidCharacters = [' ', ',', ';', '"', "'", '!', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '/', '~', '`'];
const essentialCharacters = ['@', '.'];

msgContainer.style.display = 'none';

function initialize() {
    msgContainer.style.display = 'none';
    email.value = '';
    errMsg.textContent = '';

    if (window.innerWidth < 750) {
        mainImg.src = 'assets/images/illustration-sign-up-mobile.svg';
    }
    else {
        mainImg.src = 'assets/images/illustration-sign-up-desktop.svg';
    }
}
initialize()
subscribe.addEventListener('click', () => subscribeHandler());

function subscribeHandler() {
    if (!(email.value === '')) {
        for (const inValidCharacter in inValidCharacters) {
            if (email.value.includes(inValidCharacters[inValidCharacter])) {
                error('Valid email required');
            }
            else {
                for (const essentialCharacter in essentialCharacters) {
                    if (!(email.value.includes(essentialCharacters[essentialCharacter]))) {
                        error('Valid email required');
                    }
                    else {
                        subscribeSuccess(email.value);
                        break;
                    }
                }
            }
        }
    }
    else {
        error('Please enter your email');
    }
}

function error(mess) {
    errMsg.textContent = mess;
    email.className = 'error';
}

function subscribeSuccess(email) {
    const emailMsg = document.getElementById('email-msg');
    const dismiss = document.getElementById('dismiss');
    msgContainer.style.display = 'flex';
    emailMsg.textContent = email;

    dismiss.addEventListener('click', () => initialize());
}