var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;


var searchedDoctors = function(response) {
  $('#display-results').empty();
  var array = response.data;
  var doctor_firstName = response.data[i].profile.first_name;
  var doctor_lastName = response.data[i].profile.last_name;
  var doctor_title = response.data[i].profile.title;
  var doctor_image = response.data[i].profile.image_url;
  var doctor_bio = response.data[i].profile.bio;
  console.log(array);
  for (i=0; i<array.length; i++) {
    if (array.length === 0) {
      $('#display-results').append("There are no doctors with this specialty in your area.");
    } else {
      $('#display-results').append("<div class='well col-md-6 doctor-space'><img src=" + doctor_image + "><h4>" + doctor_firstName + " "+ "<span>" + doctor_lastName + " " + "</span>" + doctor_title + "</h4><br><p>" + doctor_bio + "</p></div>");
    }
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
