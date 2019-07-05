$(document).ready(function(){
 var uid;
$('#table').on('click','#edituser',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue;
console.log(uid)
//console.log(uid);

$.ajax({
  url: 'http://localhost:3001/matches/'+uid,
  method: 'get',
  dataType: 'json',
success: function(result,status){
  //console.log(result)
$('#firstteam').val(result.firstteam);
$('#secondteam').val(result.secondteam)
$('#sportstype').val(result.sportstype)
$('#date').val(result.date)
$('#time').val(result.time)
  // window.location.href="editmatches.html"


},
error:function(jqXHR,status){

}
})
})

 $('#matchedit').submit(function(e){
e.preventDefault(); 

var updateData={
            firstteam: $('#firstteam').val(),
            secondteam: $('#secondteam').val(),
            sportstype: $('#sportstype').val(),
            date: $('#date').val(),
            time: $('#time').val()
}


$.ajax({

  url: 'http://localhost:3001/updatematches/' + uid,
  method: "PUT",
  contentType:'application/json',
  dataType: 'json',
  data:JSON.stringify(updateData),
success :function(result,status){
  console.log(result)
      window.location.href="viewmatches.html"
    alert("Updated sucessfully");  
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})
})




$('#table').on('click','#delete',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue
var confirmation= confirm("Are you sure ?")

if(confirmation == true){
 $.ajax({

  url: 'http://localhost:3001/deletematches/'+uid,
  method: 'delete',
  dataType: 'json',
success :function(result,status){
    
  window.location.href="viewmatches.html";
      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

}else{
  window.location.href="viewmatches.html";
}

})

$.ajax({

  url: 'http://localhost:3001/viewmatches',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
   //SSconsole.log(result);
    for (key in result){
     $('#table').append('\
  <tbody>\
    <tr>\
      <th scope="row">1</th>\
      <td>'+result[key].firstteam+' </td>\
      <td>'+result[key].secondteam+' </td>\
       <td>'+result[key].sportstype+' </td>\
      <td>'+result[key].date+' </td>\
      <td>'+result[key].time+' </td>\
      <td><a class="btn btn-primary" uid="'+result[key].id+'"  id="edituser" class="fa fa-edit" data-toggle="modal" data-target="#exampleModalCenter">Edit</a>\
    <button type="button" class="btn btn-danger" uid="'+result[key].id+'" id="delete" >Delete</button>    </td>\
</tr>\
  </tbody>\
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

