const form = document.querySelector(".signup");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

const newsletter = document.querySelector(".Newsletter");
const successBox = document.querySelector(".success");
const successText = document.querySelector("#successMsg strong");
const dismissBtn = document.getElementById("dismissBtn");

// Email validation regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  // Reset error
  errorMsg.textContent = "";
  emailInput.style.border = "1px solid #ccc";

  if (email === "") {
    errorMsg.textContent = "Email is required";
    emailInput.style.border = "1px solid red";
    return;
  }

  if (!isValidEmail(email)) {
    errorMsg.textContent = "Valid email required";
    emailInput.style.border = "1px solid red";
    return;
  }

  // ✅ SUCCESS
  newsletter.style.display = "none";
  successBox.style.display = "flex";

  successText.textContent = email;
});

// Dismiss button
dismissBtn.addEventListener("click", function () {
  successBox.style.display = "none";
  newsletter.style.display = "flex";
  emailInput.value = "";
});