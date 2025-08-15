document.getElementById("headerAuthBttn").addEventListener("click", () => {
  const bttnTextContent = document.getElementById("headerAuthBttn").innerHTML;
  if (bttnTextContent == "Register") {
    fetch("/registerPage/index.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("headerAuthBttn").innerHTML = "Login";
        document.getElementById("content").innerHTML = data;
      })
      .catch((err) => console.error("Failed to load header:", err));
  } else {
    document.getElementById("headerAuthBttn").innerHTML = "Register";
    document.getElementById(
      "content"
    ).innerHTML = `<div class="w-100 d-flex justify-content-center align-items-center">
                    <div class="authCard">
                    <div class="authCardHeader">
                    <h2 class="text-center">Login</h2>
                    </div>
                    <form id="loginForm" class="authForm">
                    <div class="formGroup">
                    <label for="username">Username:</label>
                    <input
                    class="textInput"
                    type="text"
                    id="username"
                    name="username"
                    required
                    />
                    </div>
                    <div class="formGroup">
                    <label for="password">Password:</label>
                    <input
                    class="textInput"
                    type="password"
                    id="password"
                    name="password"
                    minlength="6"
                    required
                    />
                    </div>
                    <button type="submit" class="bttn my-1" onclick="login()">Login</button>
                    </form>
                    </div>
                    </div>`;
  }
});

function register() {
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("userData", JSON.stringify(data));
    document.getElementById("headerAuthBttn").innerHTML = "Login";
    document.getElementById(
      "content"
    ).innerHTML = `<div class="w-100 d-flex justify-content-center align-items-center">
    <div class="authCard">
    <div class="authCardHeader">
    <h2 class="text-center">Login</h2>
    </div>
    <form id="loginForm" class="authForm">
    <div class="formGroup">
    <label for="username">Username:</label>
    <input
    class="textInput"
    type="text"
    id="username"
    name="username"
                                required
                                />
                                </div>
                                <div class="formGroup">
                                <label for="password">Password:</label>
                                <input
                                class="textInput"
                                type="password"
                                id="password"
                                name="password"
                                minlength="6"
                                required
                                />
                                </div>
                                <button type="submit" class="bttn my-1" onclick="login()">Login</button>
                                </form>
                                </div>
                                </div>`;
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
      fetch("/expensePage/index.html")
        .then((res) => res.text())
        .then((data) => {
          document.getElementById("headerAuthBttn").innerHTML = "Logout";
          document.getElementById("content").innerHTML = data;
        })
        .catch((err) => console.error("Failed to load header:", err));
    } else {
      alert("Invalid username or password");
      return;
    }
  });
}
