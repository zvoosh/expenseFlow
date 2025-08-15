function loadPage(page) {
  fetch(`${page}`)
    .then((res) => res.text())
    .then((html) => {
      localStorage.setItem("currentPage", page);
      document.getElementById("content").innerHTML = html;
    })
    .catch((err) => console.error(`Failed to load: ${page} `, err));
}

document.getElementById("headerAuthBttn").addEventListener("click", () => {
  const bttnTextContent = document.getElementById("headerAuthBttn").innerHTML;
  if (bttnTextContent == "Register") {
    document.getElementById("headerAuthBttn").innerHTML = "Login";
    localStorage.setItem("currentPage", "/registerPage/index.html");
    loadPage("/registerPage/index.html");
  } else {
    document.getElementById("headerAuthBttn").innerHTML = "Register";
    localStorage.setItem("currentPage", "/loginPage/index.html");
    loadPage("/loginPage/index.html");
  }
});

function register() {
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("userData", JSON.stringify(data));
    document.getElementById("headerAuthBttn").innerHTML = "Login";
    localStorage.setItem("currentPage", "/loginPage/index.html");
    loadPage("/loginPage/index.html");
  });
}
function login() {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.username === data.username &&
      userData.password === data.password
    ) {
      document.getElementById("headerAuthBttn").innerHTML = "Logout";
      localStorage.setItem("currentPage", "/expensePage/index.html");
      loadPage("/expensePage/index.html");
    } else {
      alert("Invalid username or password");
      return;
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const page = localStorage.getItem("currentPage") || "/loginPage/index.html";
  loadPage(page);
  if (page !== "/loginPage/index.html" || page !== "/registerPage/index.html") {
    document.getElementById("headerAuthBttn").innerHTML = "Logout";
  }
});
