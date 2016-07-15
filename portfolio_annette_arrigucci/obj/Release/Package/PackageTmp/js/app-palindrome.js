$(document).ready(function() {

	$("#submit-button-palindrome").click(function(event) {
		event.preventDefault();
		$("#is-palindrome").empty();
		var myInput = $("#new-word-palindrome").val();
		if(myInput == ''){
			alert("Please enter a word");
		}
		else {
			var letterArray = myInput.split("");
			if(checkPalindrome(letterArray) == true) {
				$("#is-palindrome").append("Yes");
			}
			else {
				$("#is-palindrome").append("No");
			}
		}
	});

	function checkPalindrome(myLetterArray){
		var middle = 0;
		var isPalindrome = true; //flag if the word is a palindrome
		var end = myLetterArray.length - 1;
		if(myLetterArray.length % 2 == 1) {
			middle = parseInt((myLetterArray.length - 1)/2);
		}
		else {
			middle = myLetterArray.length / 2;
		}
		for(var i=0; i<middle; i++) {
			if(myLetterArray[i] !== myLetterArray[end - i]){
				isPalindrome = false;
			}
		}
		return isPalindrome;
	}

});