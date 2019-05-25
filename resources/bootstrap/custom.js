$(document).ready(function(){
       $('#regisform').submit(function(event){
          event.preventDefault();
          var regisData= {
            username: $('#username').val(),
            email : $('#email').val(),
            password: $('#password').val()


 

          }
     

          $.ajax({

  url: 'http://localhost:3001/v1/registration',
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(regisData),



  success :function(result,status){
      console.log(result);
      console.log(status);  

      $('#successmessage').html(result.message);    
  },

  error:function(jqXHR,status) {
    console.log(jqXHR.responseJSON.message);
    $('#successmessage').html(jqXHR.responseJSON.message);

  }
 })
})





})
	