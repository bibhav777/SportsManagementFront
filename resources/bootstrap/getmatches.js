$.ajax({

  url: 'http://localhost:3001/viewmatches',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
   //SSconsole.log(result);
    for (key in result){
     $('#table').append('<div id="table">\
       <div class="card-box">\
                    <div class="card-title">\
                        <h2>Match Schedule</h2>\
      Teams:  '+result[key].firstteam+'  vs  '+result[key].secondteam+'<br>\
Sport:'+result[key].sportstype+'<br>\
      Date:'+result[key].date+'<br> \
      Time:'+result[key].time+'<br>\
                    </div>\
                    <div class="card-link">\
                        \
                    </div>\
                </div>\
            </div>\
                </div>\
           </div>\
')

    }

 

      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

  