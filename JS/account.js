 

const USERS_KEY = "users";
const SESSION_KEY = "currentUser";

// ---------- Helpers ----------
function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function findUserByEmail(email) {
  return getUsers().find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
}

function setSession(email) {
  localStorage.setItem(SESSION_KEY, email);
}

function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = "message " + (type || "");
}

// ---------- Sign Up ----------
function handleSignup(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const msgEl = document.getElementById("message");

  if (!name || !email || !password || !confirmPassword) {
   showMessage(msgEl, "Please fill in all fields.", "error");
    return;
  }

  if (password.length < 6) {
   showMessage(msgEl, "Password must be at least 6 characters long.", "error");
    return;
  }

  if (password !== confirmPassword) {
  showMessage(msgEl, "Passwords do not match.", "error");
    return;
  }

  if (findUserByEmail(email)) {
   showMessage(msgEl, "An account with this email already exists.", "error");
    return;
  }

  const users = getUsers();
  users.push({ name, email, password });
  saveUsers(users);

  showMessage(msgEl, "Account  create successfully", "success");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1200);
}

// ---------- Sign In ----------
function handleSignin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const msgEl = document.getElementById("message");

  if (!email || !password) {
   showMessage(msgEl, "Please enter both email and password.", "error");
    return;
  }

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
  showMessage(msgEl, "Invalid email or password.", "error");
    return;
  }

  setSession(user.email);
  showMessage(msgEl, "Login successful! Redirecting...", "success");

  setTimeout(() => {
   window.location.href = "../index.html";
  }, 800);
}

// ---------- Logout ----------
function handleLogout() {
  clearSession();
  window.location.reload();
}

// ---------- Render session state on signin page ----------
function renderSessionUI() {
  const loggedInEmail = getSession();
  const formSection = document.getElementById("authFormSection");
  const dashboardSection = document.getElementById("dashboardSection");

  if (!formSection || !dashboardSection) return;

  if (loggedInEmail) {
    const user = findUserByEmail(loggedInEmail);
    formSection.style.display = "none";
    dashboardSection.style.display = "block";
    document.getElementById("welcomeName").textContent = user ? user.name : loggedInEmail;
    document.getElementById("welcomeEmail").textContent = loggedInEmail;
  } else {
    formSection.style.display = "block";
    dashboardSection.style.display = "none";
  }
}

// ---------- Attach listeners on load ----------
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const logoutBtn = document.getElementById("logoutBtn");

  if (signupForm) signupForm.addEventListener("submit", handleSignup);
  if (signinForm) signinForm.addEventListener("submit", handleSignin);
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  renderSessionUI();
});