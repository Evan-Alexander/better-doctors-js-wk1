var Doctor = require('./../js/doctors.js').doctorModule;
var apiKey = require('./../.env').apiKey;


var searchedDoctors = function(response) {
  $('#display-results').empty();
  var array = response.data;
  console.log(array);
  for (i=0; i<array.length; i++) {
    $('#display-results'). append("<h4>" + response.data[i].profile.first_name + "</h4>");
  };

};

$(document).ready(function() {
  var doctor = new Doctor;
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#search-ailment').val();
    console.log(medicalIssue);
    $('#search-ailment').val("");
    doctor.getDoctor(medicalIssue, searchedDoctors);
  });
});
