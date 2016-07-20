$(document).ready(function() {

	$("#submit-button-factorial").click(function(event) {
		event.preventDefault();
		$("#factorial-result").empty();
		var myInput = $("#new-number-factorial").val();
		if (myInput == '') {
		    alert("Please enter a non-negative integer");
		}
        else if (+(myInput) % 1 != 0) {
			alert("Input must be an integer");
		}
		else if	(+(myInput) < 0){
			alert("Input must not be negative");
		}
		else {
			var number = parseInt(+(myInput));
			$("#factorial-result").append(factorial(number));
		}
	});

	function factorial(myNumber){
		var myProduct = myNumber;
		var i = myNumber;
		while(i > 1) {
			i--;
		 	myProduct*=i;
		}
		return myProduct;
	}

});