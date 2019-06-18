$.ajax({
url: 'http://localhost:3001/v1/adminDashboard',
  method: 'GET',
  dataType: 'json',
  headers: {authorization: 'Bearer'+window.localStorage.getItem('token')},


   success :function(result,status){
    
  


  },

  error:function(jqXHR,status) {
   // console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }

 })

