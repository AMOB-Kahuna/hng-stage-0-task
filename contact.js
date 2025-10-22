const contactForm = document.getElementById('contact-form');
const sendMailBtn = document.getElementById('send-mail-btn');
const time = document.getElementById('time');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const subjectEl = document.getElementById('title');
const messageEl = document.getElementById('message');
const nameErrorEl = document.getElementById('error-name');
const emailErrorEl = document.getElementById('error-email');
const subjectErrorEl = document.getElementById('error-subject');
const messageErrorEl = document.getElementById('error-message');
const successMessageEl = document.getElementById('success-message');


(function() {
  emailjs.init({
    publicKey: "a7RJCIfcZLksth7kw",
  });
})();

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (nameEl.value.trim() === "") {
    nameErrorEl.textContent = "Name is required.";
    nameErrorEl.style.display = "block";
    return;
  } else {
    nameErrorEl.textContent = "";
    nameErrorEl.style.display = "none";
  }

  if (emailEl.value.trim() === "") {
    emailErrorEl.textContent = "Email is required.";
    emailErrorEl.style.display = "block";
    return;
  } else if (!/^\S+@\S+\.\S+$/.test(emailEl.value.trim())) {
    emailErrorEl.textContent = "Email format is invalid.";
    emailErrorEl.style.display = "block";
    return;
  } else {
    emailErrorEl.textContent = "";
    emailErrorEl.style.display = "none";
  }

  if (subjectEl.value.trim() === "") {
    subjectErrorEl.textContent = "Subject is required.";
    subjectErrorEl.style.display = "block";
    return;
  } else {
    subjectErrorEl.textContent = "";
    subjectErrorEl.style.display = "none";
  }

  if (messageEl.value.trim() === "") {
    messageErrorEl.textContent = "Message is required.";
    messageErrorEl.style.display = "block";
    return;
  }else if (messageEl.value.length < 10) {
    messageErrorEl.textContent = "Message must be at least 10 characters.";
    messageErrorEl.style.display = "block";
    return;
  } else {
    messageErrorEl.textContent = "";
    messageErrorEl.style.display = "none";
  }

  sendMailBtn.value = 'Sending...';

  const now = new Date();

  const options = { month: 'short' };
  const month = new Intl.DateTimeFormat('en-US', options).format(now);
  const day = now.getDate();
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = String(hours).padStart(2, '0');

  const formattedDate = `${month} ${day} ${year} ${formattedHours}:${minutes} ${ampm}`;
  time.value = formattedDate;

  emailjs.sendForm('service_vveeyv7', 'contact_form', this)
    .then(() => {
      successMessageEl.textContent = "Message sent successfully";
      successMessageEl.style.display  = "block";
      setTimeout(() => {
        successMessageEl.style.display  = "none";
      }, 3000);
      sendMailBtn.value = 'Send Message';
    }, (error) => {
      sendMailBtn.value = 'Send Message';
      console.log('FAILED...', error);
  });
});