// Provided to you is code that takes the paragraph you provide, calculates the letter counts, and outputs an array of 26 numbers. 
// Each number in the array correlates with the letter count. (i.e. [2, 3, 1] would mean 2 letter As, 3 letter Bs, 1 letter C).
// Don't touch the provided code! It definitely works. Your code comes after!

// PROVIDED CODE
// ===============================================================================================================================
// Calculate the total letter count
var sumLetters = 0;

// Array of all letters for future reference
var letters = [	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

// Upon button click all letters in the paragraph are tallied and stored into a numeric array.
$("#analyzeBtn").on("click", function(){

	// Some initial counting magic
	sumLetters = 0;

	// Lots of letter counting magic...
	var paragraphText = $("#paragraphText").val().trim().toLowerCase().replace(/[^a-z]/gi, '');

	// The magic continues...
	var letterSplit = paragraphText.split("").sort();

	var letterCounts = {
		"a": 0,
		"b": 0,
		"c": 0,
		"d": 0,
		"e": 0,
		"f": 0,
		"g": 0,
		"h": 0,
		"i": 0,
		"j": 0,
		"k": 0,
		"l": 0,
		"m": 0,
		"n": 0,
		"o": 0,
		"p": 0,
		"q": 0,
		"r": 0,
		"s": 0,
		"t": 0,
		"u": 0,
		"v": 0,
		"w": 0,
		"x": 0,
		"y": 0,
		"z": 0
	};

	// Final bit of letter counting wizardry...
	for (var i=0; i<letterSplit.length; i++){

    	letterCounts[letterSplit[i]]++;
    	sumLetters++;
	}

	// And here you have it! The data we want you to visualize.
	// It comes in the following format [2, 3, 2, 1, ...]. Each array index matches exactly with the corresponding letter of the alphabet.
	var letterCountArray = _.values(letterCounts);

	console.log(letterCountArray);

	renderAnalysis(letterCountArray);
});

// ===============================================================================================================================

// Use D3.js to create a simple bar graph that shows how many of each letter appears in the word.  
function renderAnalysis(letterData){

	// Use D3.js to select the correct div panel
	// Then use chained methods to associate all the divs in that panel
	// With the data provided in letterData.
	// ...



	// Create an entering selector for handling the data's load the first time. 
	// ...



	// Use the entering selector to specify alternating colored bands for each letter
	// Set the width of each band to be proportional between the letter count and the total number of letters
	// Then display as the text the letter and the count inside the div
	// ...





	// Create an update selector for handling the data refresh each time the user updates. 
	// It should do the same things as the entering selector
	// ...


	


	// For simplicity, no need for an exit method.

}
