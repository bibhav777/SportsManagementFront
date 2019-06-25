$(document).ready(function(){

$.ajax({

  url: 'http://localhost:3001/viewplayers',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
    console.log(result);
    for (key in result){
    	   $('#card').append('  <div class="card" id="card">\
  <img src= "http://localhost:3001/uploads/'+result[key].image+'" height="200" width="200"/>\
\
<p class="card-text">\   \
                           \
    Fullname:'+result[key].fullname+' <br>\
    Date of Birth:'+result[key].dob+'<br>\
    Address:'+result[key].address+'<br>\
    Sports:'+result[key].sportsinvolved+' <br>\
    Height:'+result[key].height+'<br>\
    Joined since:'+result[key].registersince+' <br>\
    Position:'+result[key].position+'<br>\
    <a href="addplayer.html" class="btn btn-light">Update</a>\
    <a href="players.html" class="btn btn-light">Delete </a>\
  </div><br>\
')

    }

 

      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
 })
})