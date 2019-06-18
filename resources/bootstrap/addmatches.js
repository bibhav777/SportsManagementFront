$(document).ready(function(){
       $('#addMatch').submit(function(event){
          event.preventDefault();
       
          var matchDetails= {
            firstteam: $('#firstteam').val(),
            secondteam: $('#secondteam').val(),
            sportstype: $('#sportstype').val(),
            date: $('#date').val(),
            time: $('#time').val()
           }
    //console.log(matchDetails);
           
  $.ajax({

  url: 'http://localhost:3001/addmatches',
  method: 'POST',
  contentType:'application/json',
  data:JSON.stringify(matchDetails),



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
	