/* Form Submission */
$("#contact").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    var data = {};
    $(this).serializeArray().map(function(x){data[x.name] = x.value;}); 
    $.ajax({
      type: "POST",
      url: action,
      data: JSON.stringify(data),
      contentType: "application/json",
      headers: {
        "Accept": "application/json"
      }
    }).done(function() {
       $('.success').addClass('is-active');
    }).fail(function() {
       alert('An error occurred please try again later.')
    });
  });