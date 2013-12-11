var deleteBook = function() {
	var id = $("input[name=delete]:checked").val();
	
	if(!id) {
		return;
	}
	
	$.ajax({
		url : "rest/books/" + id,
		type : "DELETE",
		dataType : "json",
		success : function (result) {
			console.log(result);
			$("tr[id=" + id + "]").remove();
		},
		error : function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(errorThrown);
			console.log("textStatus: " + textStatus);
		}
	});
};

var editBook = function() {
	var id = $("input[name=delete]:checked").val();
	
	if(!id) {
		return;
	}
};