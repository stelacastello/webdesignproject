document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    // Get form data
    var formData = new FormData(this);
    
    // You can now send formData to your server using AJAX or any other method
    // For demonstration purposes, we'll just log the form data to the console
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); 
    }
    
    // Display submission message on the page
    document.getElementById("submissionMessage").style.display = "block";
    
    // Here, you can add code to send the form data to your server
    // using AJAX or any other method
    
    // Reset form after submission
    this.reset();
});
