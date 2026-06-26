document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Responsive Menu Toggle ---
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation item link is clicked
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // --- Form Submission Handling ---
    const enquiryForm = document.getElementById("enquiryForm");
    
    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Grab values entered by the user
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;
        const userMessage = document.getElementById("message").value;

        // Display confirmation alert to user
        alert(`Thank you, ${userName}! Your enquiry has been recorded. Sweet Bliss Bakery will reach out to you soon.`);
        
        // Reset the form fields
        enquiryForm.reset();
    });
});
