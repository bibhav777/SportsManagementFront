$(document).ready(function(){
 var uid;
$('#table').on('click','#delete',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue
 $.ajax({

  url: 'http://localhost:3001/viewmatches/'+uid,
  method: 'delete',
  dataType: 'json',
success :function(result,status){
    

      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

})


$.ajax({

  url: 'http://localhost:3001/viewmatches',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
    console.log(result);
    for (key in result){
     $('#table').append('\
\
  <tbody>\
    <tr>\
      <th scope="row">1</th>\
      <td>'+result[key].firstteam+' </td>\
      <td>'+result[key].secondteam+' </td>\
       <td>'+result[key].sportstype+' </td>\
      <td>'+result[key].date+' </td>\
      <td>'+result[key].time+' </td>\
      <td>   <a href="editmatches.html" class="btn btn-light" class="fa fa-edit">Edit</a>\
    <button type="button" class="btn btn-danger" uid="'+result[key].id+'" id="delete" >Delete</button>    </td>\
</tr>\
   \
  </tbody>\
\
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

