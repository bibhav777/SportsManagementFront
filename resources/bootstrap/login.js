$(document).ready(function(){
       $('#loginForm').submit(function(event){
          event.preventDefault();
          var loginData= {
            username: $('#username').val(),
            password: $('#password').val()


 

          }
       console.log(loginData);

          $.ajax({

  url: 'http://localhost:3001/v1/login',
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(loginForm),



  success :function(result,status){
      console.log(result);
      console.log(status);      
  },

  error:function(jqXHR,status) {
    console.log(jqXHR.responseJSON.message);

  }

            



          })

 


       })





})
	