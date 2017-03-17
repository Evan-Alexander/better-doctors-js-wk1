var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;


var searchedDoctors = function(response) {
  $('#display-results').empty();
  var array = response.data;
  console.log(array);
  for (i=0; i<array.length; i++) {
    $('#display-results'). append("<div class='well col-md-6 doctor-space'><img src="+response.data[i].profile.image_url+"><h4>" + response.data[i].profile.first_name + " "+ "<span>" + response.data[i].profile.last_name + " "+ "</span>" + response.data[i].profile.title + "</h4><br><p>" + response.data[i].profile.bio + "</p></div>");
  }
  // for (i=0;i<array.length;i++){
  //   for (j=0;j<3;j++){
  //   $("#display-results").append("<li>"++" - "+  +"</li>")
  //   }
  // }

};

$(document).ready(function() {
  var doctor = new Doctor();
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#search-ailment').val();
    console.log(medicalIssue);
    $('#search-ailment').val("");
    doctor.getDoctor(medicalIssue, searchedDoctors);
  });
});
