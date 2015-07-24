function loadQuote() {

	/* Quote Data */
	var quotes = [
		{
			quote: 'If you want to achieve greatness stop asking for permission.',
			author: 'Anonymous'
		},
		{
			quote: 'Things work out best for those who make the best of how things work out.',
			author: 'John Wooden'
		},
		{
			quote: 'Never give up.',
			author: 'Anonymous'
		},
		{
			quote: 'If you are not willing to risk the usual you will have to settle for the ordinary.',
			author: 'Anonymous'
		}
	];

	/* Select Quote & Display */
	var selection = Math.floor((Math.random() * quotes.length) + 0);
	document.getElementById("quote").innerHTML = ('"' + quotes[selection].quote + '"');
	document.getElementById("author").innerHTML = ('- ' + quotes[selection].author);

}

window.addEventListener("load", loadQuote());