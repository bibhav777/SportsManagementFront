  $.ajax({

  url: 'http://localhost:3001/v1/adminDashboard',
  method: 'GET',
  dataType: 'json',
  



  success :function(result,status){
        
  },

  error:function(jqXHR,status) {
   // console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
 })