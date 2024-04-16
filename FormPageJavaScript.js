document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
	
    //Get information for the form data
    var formData = new FormData(this);
    
    //Sending information to formData
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); 
    }
    
    //Displaying the submission message on my page
    document.getElementById("submissionMessage").style.display = "block";
    
    //Resetting the form after user's submission
    this.reset();
});
