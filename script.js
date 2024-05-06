    // Add event listener to form submission
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    });




