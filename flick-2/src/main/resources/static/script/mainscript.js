
 $(document).ready(function() {
	    $.ajax({
	        url: "/hello?name=ibrahim"
	    }).then(function(data) {
	       $('.greeting-msg').append(data);
	       console.log(data);
	       alert(data);
	      
	    });
	});