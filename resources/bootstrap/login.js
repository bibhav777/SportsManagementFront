$(document).ready(function(){
       $('#loginForm').submit(function(event){
          event.preventDefault();
          var loginData= {
            username: $('#username').val(),
            password: $('#password').val()
}

//console.log(loginData)
 $.ajax({
  url: 'http://localhost:3001/v1/login',
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(loginData),



  success :function(result,status){
    $('#message').html(result.message);
      console.log(result.token);
      window.localStorage.setItem('token',result.token);
      window.location.href="adminDashboard.html";
         
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
      //  $('#message').html(jqXHR.responseJSON.message);

  }

             })
})





})
	