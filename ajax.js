$(document).ready(function(){
    $("#shoutbutton").click(function() {

      var data_json = { "name":"Lutfi",
                          "message": document.getElementById("msg").value};

      console.log(data_json);
      $.ajax({
        type: "POST", //change to "POST" for POST request
        url: "reply.php",
        data: $("#form1").serialize(),
        success: function(rsp) {
          $("#data").append("<div>"+rsp+"</div>");
        },
        error: function(rsp) {
          alert(rsp);
        }
      });
    });
  });