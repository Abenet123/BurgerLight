const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector('.faq-child');
  const answer = faqItem.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
function validateName(){
  const name = document.getElementById('name').value;
  if(name.length == 0){
    nameError.innerHTML = 'name is required &#9888; ';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'write full name &#9888; ';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #10f414;"></i>';
  return true;
}

function validateEmail(){
  const email = document.getElementById('email').value;

  if(email.length == ''){
    emailError.innerHTML = 'email is required &#9888; ';
    return false;
  }
  if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML = 'invalid email &#9888; ';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #10f414;"></i>';
  return true;
}

function validateMessage(){
  const message = document.getElementById('text-area').value;
  const required = 10;
  const left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + ' more character needs';
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #10f414;"></i>';
  return true;
}
function sentIt(){
  (function(){
    emailjs.init('4jJtSYskrSOd4unH8'); //Account public key
  })();

  var params = {
    fullname: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('text-area').value,
  };
}
var serviceId = "service_d8o6dfh";
var templateId = "template_6zo0z9g";
emailjs.send(serviceId, templateId, params).then( res =>{
  alert("Email sent Sucessfully!");
})
.catch();



