$(document).ready(function(){
       $('#addplayer').submit(function(event){
          event.preventDefault();
          var formdata= new FormData();
          var playerData= {
            image: $('#image')[0].files[0],
            fullname: $('#fullname').val(),
            dob : $('#dob').val(),
            address: $('#address').val(),
            sports: $('#sports').val(),
            height: $('#height').val(),
            regisdate: $('#regisdate').val(),
            position: $('#position').val()
          }
           for(key in playerData){
           formdata.append(key, playerData[key]);
         }
           
  $.ajax({

  url: 'http://localhost:3001/addplayers',
  method: 'POST',
  contentType: false,
  processData:false,
  data: formdata,
  dataType: 'json',



  success :function(result,status){
    

      $('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
 })
})





})
	