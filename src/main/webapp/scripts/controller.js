var listBooks = function() {
	$("#booksMain").empty();
	$.get("rest/books", function (data, status) {
		dust.render("booklist", data, function(err, out) {
			$("#booksMain").append(out);
		});
	}, "json");
};

var deleteBook = function() {
	var id = $("input[name=selectbook]:checked").val();
	
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
	var id = $("input[name=selectbook]:checked").val();
	
	if(!id) {
		return;
	}
	
	$("#booksMain").empty();
	$.get("rest/books/" + id, function (data, status) {
		dust.render("addedit", data, function(err, out) {
			$("#booksMain").append(out);
		});
	}, "json");
};

var createBook = function() {
	$("#booksMain").empty();
	dust.render("addedit", {}, function(err, out) {
		$("#booksMain").append(out);
	});
};

var saveBook = function() {
	var id = $("#id").val();
	var data = {
		name : $("#name").val(),
		author : $("#author").val()
	};
	
	var url = "rest/books/";
	var op = "POST";
	if(id) {
		op = "PUT";
		url = url + id;
	}
	
	$.ajax({
		url : url,
		type : op,
		data : JSON.stringify(data),
		dataType : "json",
		contentType : "application/json",
		success : function (result) {
			listBooks();
		},
		error : function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(errorThrown);
			console.log("textStatus: " + textStatus);
		}
	});
};

var cancel = function () {
	listBooks();
};