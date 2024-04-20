
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Username and password are required.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}
