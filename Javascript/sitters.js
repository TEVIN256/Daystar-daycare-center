document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate each input field
        const name = document.getElementById("name").value.trim();
        const location = document.getElementById("location").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const nextOfKin = document.getElementById("next-of-kin").value.trim();
        const nin = document.getElementById("nin").value.trim();
        const recommender = document.getElementById("recommender").value.trim();

        // Simple validation for required fields
        if (name === "" || location === "" || dob === "" || gender === "" || nextOfKin === "" || nin === "" || recommender === "") {
            successMessage.textContent = "Please fill in all required fields.";
            return;
        }

        // Additional validation if needed, e.g., regex validation for NIN format

        // If all validation passes, show success message
        successMessage.textContent = "Registration successful!";
        // You can also submit the form here if needed
        // form.submit();
    });
});
