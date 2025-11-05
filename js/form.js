// Multi-step form with LocalStorage + trainee additions
const form = document.getElementById("jobForm");
const steps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const resumeInput = document.getElementById("resume");
const fileError = document.getElementById("fileError");
const leadershipField = document.getElementById("leadershipField");
const analyticsDisplay = document.getElementById("analytics");
let stepIndex = 0;

// Analytics counters
let started = localStorage.getItem("startedCount") || 0;
let submitted = localStorage.getItem("submittedCount") || 0;
updateAnalytics();

// Load saved data
if (localStorage.getItem("jobForm")) {
  const saved = JSON.parse(localStorage.getItem("jobForm"));
  for (const [key, value] of Object.entries(saved)) {
    const input = form.elements[key];
    if (input) input.value = value;
  }
}

// Show step
function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  progress.style.width = `${((index + 1) / steps.length) * 100}%`;
}
showStep(stepIndex);

// Button handlers
document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!validateStep(stepIndex)) return;
    stepIndex = Math.min(stepIndex + 1, steps.length - 1);
    showStep(stepIndex);
    saveForm();
    if (stepIndex === steps.length - 1) populateReview();
  });
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.addEventListener("click", () => {
    stepIndex = Math.max(stepIndex - 1, 0);
    showStep(stepIndex);
  });
});

// Save to localStorage
function saveForm() {
  const data = {};
  Array.from(form.elements).forEach(el => {
    if (el.name) data[el.name] = el.value;
  });
  localStorage.setItem("jobForm", JSON.stringify(data));
}

// Populate review step
function populateReview() {
  const data = JSON.parse(localStorage.getItem("jobForm"));
  const review = document.getElementById("review");
  review.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Experience:</strong> ${data.experience} years</p>
    <p><strong>Skills:</strong> ${data.skills}</p>
    ${data.leadership ? `<p><strong>Leadership:</strong> ${data.leadership}</p>` : ""}
    <p><strong>Resume:</strong> ${resumeInput.value.split("\\").pop()}</p>
  `;
}

// Validation
function validateStep(step) {
  if (step === 0) {
    const email = form.email.value;
    const phone = form.phone.value;
    const emailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const phoneValid = /^\+?\d{10,15}$/.test(phone);
    if (!emailValid || !phoneValid) {
      alert("Please enter valid email and phone number.");
      return false;
    }
  }

  if (step === 1) {
    const exp = parseInt(form.experience.value);
    leadershipField.style.display = exp > 5 ? "block" : "none";
  }

  if (step === 2) {
    const file = resumeInput.files[0];
    if (!file) {
      fileError.textContent = "Please upload your resume.";
      return false;
    }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      fileError.textContent = "Invalid file type. Only PDF, DOC, DOCX allowed.";
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      fileError.textContent = "File size exceeds 2MB.";
      return false;
    }
    fileError.textContent = "";
  }

  if (step === 0 && started == 0) {
    started++;
    localStorage.setItem("startedCount", started);
    updateAnalytics();
  }

  return true;
}

// Submit
form.addEventListener("submit", e => {
  e.preventDefault();
  localStorage.removeItem("jobForm");
  submitted++;
  localStorage.setItem("submittedCount", submitted);
  updateAnalytics();
  window.location.href = "thankyou.html";
});

function updateAnalytics() {
  analyticsDisplay.textContent = `Forms started: ${started} | Submitted: ${submitted}`;
}
