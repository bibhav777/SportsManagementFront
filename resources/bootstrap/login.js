


$(document).ready(function(){
       $('#loginForm').submit(function(event){
          event.preventDefault();
          var loginData= {
            username: $('#username').val(),
            password: $('#password').val()
}
     

          $.ajax({

  url: 'http://localhost:3001/v1/auth',
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(loginData),



  success :function(result,status){
      //console.log(result);
      //console.log(status);      
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);

  }

            



          })

 


       })





})
	