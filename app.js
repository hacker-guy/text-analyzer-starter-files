
function textStats() {
	$('.js-submit').click(function(event) {

		event.preventDefault();

		var analText = $('#user-text').val().split(/\s+\b/);

		var wordCount = countWords(analText);
		$('.js-count').text(wordCount);

		var uWordCount = countUWords(analText);
		$('.js-uCount').text(uWordCount);

		var wordLengths = lengthWords(analText);
		$('.js-length').text(wordLengths + ' characters');

		$('dl').removeClass('hidden');
	});
}

function countWords(text) {
	return text.length;
}

function countUWords(text) {
	var usedWords = [];
	var counter = 0;
	for (var i = 0; i < text.length; i++) {
		if (usedWords.includes(text[i])) {
			continue;
		}
		usedWords.push(text[i]);
		counter++;
	}
	return counter;
}

function lengthWords(text) {
	var total = 0;
	for (var i = 0; i < text.length; i++) {
		total += text[i].length;
	}
	return (total/text.length).toFixed(2);
}

$(function() {
	textStats();
});


