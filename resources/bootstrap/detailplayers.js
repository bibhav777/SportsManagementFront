$(document).ready(function(){

$.ajax({

  url: 'http://localhost:3001/viewplayers',
  method: 'GET',
  dataType: 'json',



  success :function(result,status){
    console.log(result);
    for (key in result){
    	   $('#card').append('  <div class="card" id="card">\
  <img src="/img/beckham.jpg" class="card-img-top" alt="..." style="height: 450px;">\
  <div class="card-body">\
    <h5 class="card-title">\
\
\
     </h5>\
    <p class="card-text">\
    id:'+result[key].id+'\
    Fullname:'+result[key].fullname+' <br>\
    Date of Birth:'+result[key].dob+'<br>\
    Address:'+result[key].address+'<br>\
    Sports:'+result[key].sportsinvolved+' <br>\
    Height:'+result[key].height+'<br>\
    Joined since:'+result[key].registersince+' <br>\
    Position:'+result[key].position+'<br>\
    <a href="addplayer.html" class="btn btn-light">Add players</a>\
    <a href="players.html" class="btn btn-light">View players</a>\
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