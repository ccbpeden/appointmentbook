
// Business logic:

var add = function(requesterName, requestedDate, requestedStart, requestedEnd){
	return requesterName +" you requested an appointment on " + requestedDate + " starting at the time " + requestedStart + " and ending at " + requestedEnd "\\.";
};


//Everything below this line is user interface logic:
$(document).ready(function() {
	$("form#dataIn").submit(function(event) {
		event.preventDefault();
		var requesterName = $("#requesterName").val();
		var requestedDate = $("#requestedDate").val();
    var requestedStart = $("#requestedStart").val();
		var requestedEnd = $("#requestedEnd").val();
		var result = add(requesterName, requestedDate, requestedStart, requestedEnd);
		$("#appOutput").text(result);
	});
});
