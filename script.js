// script.js

// Placeholder for storing selected files
let uploadedFiles = [];

document.addEventListener('DOMContentLoaded', function() {
    // Trigger file input when the upload button is clicked
    document.getElementById('uploadBtn').addEventListener('click', function() {
        document.getElementById('imageUpload').click();
    });

    // Listen for file selection
    document.getElementById('imageUpload').addEventListener('change', function(event) {
        uploadedFiles = Array.from(event.target.files);
        alert(uploadedFiles.length + " file(s) selected");
    });

    // Process the files when the 'I'm Done Uploading' button is clicked
    document.getElementById('processBtn').addEventListener('click', function() {
        if (uploadedFiles.length === 0) {
            alert('Please upload at least one image before processing.');
            return;
        }

        // Example: Simulate processing and update progress bar
        simulateProcessing();
    });
});

function simulateProcessing() {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const interval = setInterval(() => {
        progress += 10; // Increment progress
        progressBar.style.width = progress + '%'; // Update progress bar width
        if (progress >= 100) {
            clearInterval(interval); // Stop the interval when progress reaches 100%
            alert('Processing complete. Your CSV will be downloaded shortly.');
            // Reset progress for next operation
            setTimeout(() => progressBar.style.width = '0%', 2000);
        }
    }, 200); // Update progress every 200 milliseconds
}
