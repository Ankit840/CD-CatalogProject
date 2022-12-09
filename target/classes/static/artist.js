$(document).ready(function() {
	var table = $('#data-table').DataTable({
		"lengthMenu": [5, 10, 25, 50, 100]
	});

	$.ajax({
		url: 'http://localhost:9496/api/v1/getArtists',
		type: "GET",
		dataType: 'json',
		contentType: "application/json",
		success: function(result, status, jqXHR) {
			console.log(result);
			var len = result.length;

			$("#artist").empty();
			$("#artist").append("<option>---Select Artist---</option>");
			for (var i = 0; i < len; i++) {
				var id = result[i];
				var name = result[i];

				$("#artist").append("<option value='" + id + "'>" + name + "</option>");

			}

		}
	});



	$("#artist").change(function() {
		var artist_id = $(this).val();
		http://localhost:9495/api/v1/getArtistCatalog/{artist}
		$.ajax({
			url: 'http://localhost:9496/api/v1/getArtistCatalog/' + artist_id,
			type: "GET",
			dataType: 'json',
			contentType: "application/json",
			success: function(result, status, jqXHR) {
				console.log(result);
				$("#data-table").empty();
				$("#data-table").append("<thead><tr><th>id</th><th>title</th><th>artist</th><th>country</th><th>company</th><th>price</th><th>year</th></tr></thead><tbody>");
				var len = result.length;
				for (var i = 0; i < len; i++) {
					var id = result[i]['id'];
					var title = result[i]['title'];
					var artist = result[i]['artist'];
					var country = result[i]['country'];
					var company = result[i]['company'];
					var price = result[i]['price'];
					var year = result[i]['year'];

					$("#data-table").append("<tr><td>" + id + "</td><td>" + title + "</td><td>" + artist + "</td><td>" + country + "</td><td>" + company + "</td><td>" + price + "</td><td>" + year + "</td><td><button>edit</button</td></tr>");

				}
				$("#data-table").append("<tbody>");
				table.destroy();
				table = $('#data-table').DataTable({
					"lengthMenu": [5, 10, 25, 50, 100]
				});
			}
		});
	});
	$.ajax({
		url: 'http://localhost:9496/api/v1/getAll',
		type: "GET",
		dataType: 'json',
		contentType: "application/json",
		success: function(result, status, jqXHR) {
			console.log(result);
			$("#data-table").empty();
			$("#data-table").append("<thead><tr><th>id</th><th>title</th><th>artist</th><th>country</th><th>company</th><th>price</th><th>year</th><th>edit</th></tr></thead><tbody>");
			var len = result.length;
			for (var i = 0; i < len; i++) {
				var id = result[i]['id'];
				var title = result[i]['title'];
				var artist = result[i]['artist'];
				var country = result[i]['country'];
				var company = result[i]['company'];
				var price = result[i]['price'];
				var year = result[i]['year'];

				$("#data-table").append("<tr><td>" + id + "</td><td>" + title + "</td><td>" + artist + "</td><td>" + country + "</td><td>" + company + "</td><td>" + price + "</td><td>" + year + "</td><td><button>edit</button</td></tr>");
			}
			$("#data-table").append("<tbody>");
			table.destroy();
			table = $('#data-table').DataTable({
				"lengthMenu": [5, 10, 25, 50, 100]
			});
		}
	});


});
