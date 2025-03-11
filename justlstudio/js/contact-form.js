document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (message === "") {
        displayMessage("請填寫訊息！", "error");
        return;
    }

    let googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_RQ5JXVcOEiK0gqRbofa6fSEKdCxQtsiCK3nIX7Fcbx_6aw/formResponse";

    let formData = new FormData();
    formData.append("entry.958042569", name);
    formData.append("entry.891812674", email);
    formData.append("entry.1351480605", message);

    fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        displayMessage("您的訊息已送出，我們會儘快與您聯繫！", "success");
        document.getElementById("contact-form").reset();
    }).catch(error => {
        displayMessage("發生錯誤，請稍後再試！", "error");
        console.error("Error:", error);
    });
});

function displayMessage(message, type) {
    let responseMessageDiv = document.getElementById("response-message");
    responseMessageDiv.style.display = "block";
    
    if (type === "success") {
        responseMessageDiv.style.backgroundColor = "#d4edda";
        responseMessageDiv.style.borderColor = "#c3e6cb";
        responseMessageDiv.style.color = "#155724";
    } else {
        responseMessageDiv.style.backgroundColor = "#f8d7da";
        responseMessageDiv.style.borderColor = "#f5c6cb";
        responseMessageDiv.style.color = "#721c24";
    }

    responseMessageDiv.textContent = message;
}