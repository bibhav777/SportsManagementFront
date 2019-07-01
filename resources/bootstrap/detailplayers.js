$(document).ready(function(){
var uid;
$('#card').on('click','#edituser',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue;
console.log(uid)
//console.log(uid);

$.ajax({
  url: 'http://localhost:3001/players/'+uid,
  method: 'get',
  dataType: 'json',
success: function(result,status){
  //console.log(result)
$('#fullname').val(result.fullname);
$('#dob').val(result.dob)
$('#address').val(result.address)
$('#sports').val(result.sportsinvolved)
$('#height').val(result.height)
$('#regisdate').val(result.registersince)
$('#position').val(result.position)

  // window.location.href="editmatches.html"


},
error:function(jqXHR,status){

}
})
})

$('#playeredit').submit(function(e){
e.preventDefault(); 

var updatePlayer={
            fullname: $('#fullname').val(),
            dob: $('#dob').val(),
            address: $('#address').val(),
            sportsinvolved: $('#sports').val(),
            height: $('#height').val(),
            registersince: $('#regisdate').val(),
            position:$('#position').val()

}


$.ajax({

  url: 'http://localhost:3001/updateplayers/' + uid,
  method: "PUT",
  contentType:'application/json',
  dataType: 'json',
  data:JSON.stringify(updatePlayer),
success :function(result,status){
  console.log(result)
    
    alert("Updated sucessfully"); 
    window.location.href="players.html" 
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})
})



$('#card').on('click','#delete',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue
var confirmation= confirm("Are you sure ?")

if(confirmation == true){
 $.ajax({

  url: 'http://localhost:3001/deleteplayers/'+uid,
  method: 'delete',
  dataType: 'json',
success :function(result,status){
    
  window.location.href="players.html";
      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

}else{
  window.location.href="players.html";
}

})






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
    <a class="btn btn-primary" uid="'+result[key].id+'"  id="edituser" class="fa fa-edit" data-toggle="modal" data-target="#exampleModalCenter">Edit</a>\
     <button type="button" class="btn btn-danger" uid="'+result[key].id+'" id="delete" >Delete</button>\
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