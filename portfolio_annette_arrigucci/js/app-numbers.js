$(document).ready(function() {
	var numbersArray = [];

	$("#submit-button-numbers").click(function(event) {
		event.preventDefault();
		var myInput = $("#new-number-numbers").val();
		if (myInput == '') {
		    alert("Please enter an integer");
		}
        else if (+(myInput) % 1 != 0) {
			alert("Input must be an integer");
		}
		else {
			var number = parseInt(+(myInput));
			addToArray(number);
			$("#new-number-numbers").val('');
		}
	});

	function addToArray(myNumber) {
		numbersArray.push(myNumber);
		$("#current-numbers").append(myNumber + "<br>");
	}

	$("#least-button").click(function(event) {
		if(numbersArray.length < 5) {
			alert("Please enter at least five numbers");
		}
		else {
		    $("#least-display").text('');
			$("#least-display").text("     " + least());
		}
	});

	$("#greatest-button").click(function(event) {
		if(numbersArray.length < 5) {
			alert("Please enter at least five numbers");
		}
		else {
		    $("#greatest-display").text('');
		    $("#greatest-display").text("     " + greatest());
		}
	});

	$("#mean-button").click(function(event) {
		if(numbersArray.length < 5) {
			alert("Please enter at least five numbers");
		}
		else {
		    $("#mean-display").text('');
		    $("#mean-display").text("     " + mean());
		}
	});

	$("#sum-button").click(function(event) {
		if(numbersArray.length < 5) {
			alert("Please enter at least five numbers");
		}
		else {
		    $("#sum-display").text('');
		    $("#sum-display").text("     " + sum());
		}
	});

	$("#product-button").click(function(event) {
		if(numbersArray.length < 5) {
			alert("Please enter at least five numbers");
		}
		else {
		    $("#product-display").text('');
		    $("#product-display").text("     " + product());
		}
	});

	$("#clear-button").click(function (event) {
	    numbersArray = [];
	    $("#current-numbers").text('');
	    $("#least-display").text('');
	    $("#greatest-display").text('');
	    $("#mean-display").text('');
	    $("#sum-display").text('');
	    $("#product-display").text('');
	});

	function least() {
		var myLeast = numbersArray[0];
		for(var i=1; i<numbersArray.length; i++)
		{
			if (myLeast > numbersArray[i]){
				myLeast = numbersArray[i];
			}
		}
		return myLeast;
	}

	function greatest() {
		var myGreatest = numbersArray[0];
		for(var i=1; i<numbersArray.length; i++)
		{
			if (myGreatest < numbersArray[i]){
				myGreatest = numbersArray[i];
			}
		}
		return myGreatest;
	}

	function mean() {
		var myMean = sum() / numbersArray.length;
		return myMean;
	}

	function sum() {
		var mySum = 0;
		for(var i=0; i<numbersArray.length; i++){
			mySum+=numbersArray[i];
		}
		return mySum;
	}

	function product() {
		var myProduct = 1;
		for(var i=0; i<numbersArray.length; i++){
			myProduct*=numbersArray[i];
		}
		return myProduct;
	}
});