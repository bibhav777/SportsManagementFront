$(document).ready(
   function(){
   $('#regisform').submit(function(event){

        event.preventDefault();
        var myFormData={
        	username: $('#username').val(),
        	password: $('#password').val()
                 }

                // console.log(myFormData);

$.ajax({

	url: 'http://localhost:3001/v1/users',
	method: 'POST',
	contentType: 'application/json',
	data: JSON.stringify(myFormData),



	success :function(result,status){
      console.log(result);
	},

	error:function(jqXHR,status) {
    console.log(status);

	}


})    


   })

   })

	