$(document).ready(function () {
	//接受请求
	chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
		if (request.val) {
			$('#addWikiAreaBox [name="wiki_type_title"]').val(request.val);
		}
	});
});