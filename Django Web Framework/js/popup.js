  var timeoutLength = 10000;

  var work = function () {setTimeout(
    function() {
        	var answer = confirm("Would you like to keep learning about Django?")
		if (answer){
			work();	
		}
		else{
			window.location = "http://www.google.com/";
		}
   	 }, timeoutLength); 
};

work();