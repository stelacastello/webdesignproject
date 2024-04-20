document.getElementById('spinText').addEventListener('click',function() { this.classList.toggle('spin-animation');
});
function toggleText(id) {
			  var textElement = document.getElementById(id);
			  if (textElement.style.display === "none") {
				textElement.style.display = "block";
			  } else {
				textElement.style.display = "none";
			  }
			}
 src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
  
