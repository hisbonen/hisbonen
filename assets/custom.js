document.addEventListener("DOMContentLoaded", function() {
    const contactIcon = document.getElementById('contact-icon');

    // Assuming you're working with the current URL
    const url = window.location.href;

    // Create a URL object
    const urlObj = new URL(url);

    // Combine the pathname and the hash into one string for easier manipulation
    const fullPath = urlObj.pathname + urlObj.hash;

    // Find the last segment after the final '/'
    const lastSegment = decodeURIComponent(fullPath.substring(fullPath.lastIndexOf('/') + 1));

    // Create the mailto link with the current URL in the subject
    const email = "submissions@hisbonen.org";
    const subject = decodeURIComponent("Submission related to: " + lastSegment);
    const body = decodeURIComponent("Context: " + url) + '%0A%0ASubmission:%0A%0A';
    
    // Set the href attribute for the mailto link
    contactIcon.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Open link in a new tab
    contactIcon.target = "_blank";
});