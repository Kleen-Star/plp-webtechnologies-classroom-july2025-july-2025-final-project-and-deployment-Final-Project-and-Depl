// Simple form validation + feedback
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").innerText = "✅ Thank you! We will get back to you soon.";
    form.reset();
  });
}
