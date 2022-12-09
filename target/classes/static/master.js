$(document).ready(function() {
		 $('#save').click(function(e) {
			    e.preventDefault();
			    var isFormValidated = true;
			    var title = $('#title').val();
			    var artist = $('#artist').val();
			    var country = $('#country').val();
			    var company = $('#company').val();
				var price = $('#price').val();
				var year = $('#year').val();
				
			    $(".error").remove();

			    if (title.length < 1) {
			    	isFormValidated = false;
			      $('#title').after('<span class="error" style="color: red; font-size:12px;">This field is required</span>');
			    }
			    if (artist.length < 1) {
			    	isFormValidated = false;
			      $('#artist').after('<span class="error" style="color: red; font-size:12px;">This field is required</span>');
			    }
			    if (country.length < 1) {
			    	isFormValidated = false;
			      $('#country').after('<span class="error" style="color: red; font-size:12px;">This field is required</span>');
			    }
			    if (company.length < 1) {
			    	isFormValidated = false;
				      $('#company').after('<span class="error" style="color: red; font-size:12px;">company is required');
				    }
				if (price <= 0) {
			    	isFormValidated = false;
				      $('#price').after('<span class="error" style="color: red; font-size:12px;">Price cant be zero or negative');
				    }
				if (year >= 1990 && year <= 2025) {
						
				    }else{
					isFormValidated = false;
				      $('#year').after('<span class="error" style="color: red; font-size:12px;">Year can be between 1990 and 2025');
					}
					
			    if(isFormValidated){
					console.log(isFormValidated);
						var jsonObj = {"title" : title, "artist" : artist , "country" : country , "company" : company, "price" : price,"year" : year}
						console.log(jsonObj);
						var actionUrl = "http://localhost:9496/api/v1/save";
    
						$.ajax({
							url: actionUrl,
							method: "POST",
							data: JSON.stringify(jsonObj),
							dataType: 'json',
							contentType: "application/json",
							 success: function(result,status,jqXHR ){
								  console.log(result);
								  swal({
									  title: "Success!",
									  text: "Catalogue created Successfully!",
									  icon: "success",
									  button: "okay!",
									});
									$('#title').val("");
									$('#artist').val("");
									$('#country').val("");
									$('#company').val("");
									$('#price').val("");
									$('#year').val("");
									
							 },
							 error(jqXHR, textStatus, errorThrown){
								 //Do something
							 }
						}); 
						
			    }
			  });
		 

		
	});
	
	