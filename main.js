$(document).ready(function () {
  $('#wikiItems li').on('click', function () {
    var value = $(this).text();

	chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendRequest(tab.id, {val: value}, function(response) {
	    console.log(response.farewell);
	  });
	});

  });
})